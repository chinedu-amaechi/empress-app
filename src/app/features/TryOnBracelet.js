import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Hands } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";

const TryOnBracelet = () => {
  // Refs for the video element and the container for three.js canvas
  const videoRef = useRef(null);
  const threeCanvasRef = useRef(null);
  // Reference to the loaded 3D bracelet model
  const braceletModelRef = useRef(null);

  // Refs for three.js scene, camera and renderer
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    // 1. Set up the three.js scene, camera, and renderer.
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera3D = new THREE.PerspectiveCamera(75, 640 / 480, 0.1, 1000);
    camera3D.position.z = 5;
    cameraRef.current = camera3D;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(640, 480);
    rendererRef.current = renderer;
    // Append the renderer's canvas into the designated div
    threeCanvasRef.current.appendChild(renderer.domElement);

    // Add some ambient lighting
    const light = new THREE.HemisphereLight(0xffffff, 0x444444);
    light.position.set(0, 20, 0);
    scene.add(light);

    // 2. Load the 3D bracelet model using GLTFLoader
    const loader = new GLTFLoader();
    loader.load("/bracelet.glb", (gltf) => {
      const bracelet = gltf.scene;
      // Scale and orient your model as needed
      bracelet.scale.set(0.5, 0.5, 0.5);
      braceletModelRef.current = bracelet;
      scene.add(bracelet);
    });

    // 3. Create an animation loop to continuously render the scene
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera3D);
    };
    animate();

    // 4. Initialize MediaPipe Hands for hand tracking
    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });
    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7,
    });

    // onResults: Update the 3D model position based on wrist coordinates.
    hands.onResults((results) => {
      if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        const landmarks = results.multiHandLandmarks[0];
        // Landmark 0 corresponds to the wrist.
        const wrist = landmarks[0];
        // Convert normalized coordinates to pixel values based on canvas dimensions.
        const xPos = (wrist.x - 0.5) * 10; // adjust scaling as needed
        const yPos = -(wrist.y - 0.5) * 10; // invert y-axis

        if (braceletModelRef.current) {
          // Update the bracelet model's position to follow the wrist
          braceletModelRef.current.position.set(xPos, yPos, 0);
        }
      }
    });

    // 5. Set up the video stream and connect it to MediaPipe Hands.
    const videoElement = videoRef.current;
    const mpCamera = new Camera(videoElement, {
      onFrame: async () => {
        await hands.send({ image: videoElement });
      },
      width: 640,
      height: 480,
    });
    mpCamera.start();
  }, []);

  return (
    <div style={{ position: "relative", width: 640, height: 480 }}>
      {/* Hidden video element capturing the camera feed */}
      <video
        ref={videoRef}
        style={{ display: "none" }}
        autoPlay
        playsInline
        muted
      />
      {/* Container for the three.js canvas */}
      <div
        ref={threeCanvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 640,
          height: 480,
        }}
      />
    </div>
  );
};

export default TryOnBracelet;

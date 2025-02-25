"use client";

import { useState, useEffect, useRef } from "react";
import { Send, MessageCircle, X } from "lucide-react";

function Chatbot() {
  // Initial messages include a system message for context
  const [messages, setMessages] = useState([
    {
      sender: "system",
      text: "You are a helpful assistant for Empress, an e-commerce site for bracelets.",
    },
    { sender: "Empress", text: "Hi, how can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Ref to auto-scroll to the latest message
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add the user's message to the conversation
    const userMessage = { sender: "You", text: input };
    const updatedMessages = [...messages, userMessage];

    // Log raw messages for debugging
    console.log("Updated messages being sent:", updatedMessages);

    // Format messages to match OpenAI's required format: "user", "assistant", "system"
    const formattedMessages = updatedMessages.map((msg) => ({
      role:
        msg.sender === "You"
          ? "user"
          : msg.sender === "system"
          ? "system"
          : "assistant",
      content: msg.text,
    }));

    // Log the formatted messages
    console.log("Formatted messages for API:", formattedMessages);

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      // Call OpenAI API directly using fetch
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Your API key from .env (remember, this is only for testing)
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: formattedMessages,
          }),
        }
      );

      const data = await response.json();

      // Extract the response from OpenAI
      const botMessage = {
        sender: "Empress",
        text: data.choices[0].message.content,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "Empress", text: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 flex items-center justify-center w-16 h-16 rounded-full bg-black hover:bg-gray-700 text-white shadow-lg transition duration-300"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <MessageCircle size={30} />
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg w-96 h-[500px] flex flex-col transition-all duration-300">
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b dark:border-gray-700">
            <div>
              <h2 className="font-semibold text-lg">Chatbot</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Powered by Empress & OpenAI
              </p>
            </div>
            <button
              onClick={toggleChat}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={30} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-2 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className="flex gap-3 text-sm">
                <div
                  className={`rounded-full p-2 w-8 h-8 flex items-center justify-center ${
                    msg.sender === "Empress"
                      ? "bg-gray-100 dark:bg-gray-800"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  {msg.sender === "Empress" ? "🤖" : "👤"}
                </div>
                <p className="leading-relaxed">
                  <span className="block font-bold">{msg.sender}</span>
                  {msg.text}
                </p>
              </div>
            ))}
            {loading && (
              <div className="flex gap-3 text-sm">
                <div className="rounded-full p-2 w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                  🤖
                </div>
                <p className="leading-relaxed italic">Typing...</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Field */}
          <form
            onSubmit={handleSend}
            className="flex items-center border-t pt-2 dark:border-gray-700"
          >
            <input
              type="text"
              className="flex-1 rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="ml-2 p-2 bg-black text-white rounded-md hover:bg-gray-700 transition duration-300"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chatbot;

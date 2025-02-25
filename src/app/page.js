import React from "react";
import ProductCard from "./ui/product-card";
import SignIn from "./auth/sign-in/page";

export default function Home() {
  return (
    <div>
      <ProductCard />
      <SignIn />
    </div>
  );
}

import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Empress",
  description: "Online Bracelet Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.className}`}>
        <header className="sticky top-0 left-0 z-50"><Navbar/></header>
        {children}
        <footer><Footer/></footer>
      </body>
        
    </html>
  );
}

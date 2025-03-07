import "./globals.css";
import { Open_Sans, Playfair_Display, Italiana } from "next/font/google";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

const openSans = Open_Sans({ subsets: ["latin"] });

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"], // Specify the font weights you need
  variable: "--font-playfair-display", // Define a CSS variable for the font
});

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"], // Specify the font weights you need
  variable: "--font-italiana", // Define a CSS variable for the font
});

export const metadata = {
  title: "Empress",
  description: "Online Bracelet Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.className} ${playfairDisplay.variable} ${italiana.variable}`}>
      <body>
        <header className="sticky top-0 left-0 z-50"><Navbar/></header>
        {children}
        <footer><Footer/></footer>
      </body>
        
    </html>
  );
}

// "use client";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { ChatProvider } from "./provider";

export const metadata = {
  httpEquiv: 'Content-Security-Policy',
  content: "upgrade-insecure-requests",
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navbar />
        <ChatProvider>{children}</ChatProvider>
      </body>
    </html>
  );
}

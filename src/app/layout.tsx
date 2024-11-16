import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/components/Header";



export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="">
        <div className="background-wrapper">
          <div className="background-image"></div>
          <div className="overlay"></div>
        </div>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

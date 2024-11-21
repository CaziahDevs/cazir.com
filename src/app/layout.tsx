'use client'
import type { Metadata } from "next";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import "./globals.css";
import Header from "@/app/components/Header";

export default function RootLayout({ 
  children, 
}: Readonly<{ 
  children: React.ReactNode; 
}>) {

  const pathname = usePathname();
  const shouldBlur = pathname !== '/'; // Don't blur on home page

  return (
    <html lang="en">
      <body className="">
        <div className="min-h-screen background-wrapper">
          <div className="background-image"></div>
          <div className="overlay"></div>
        </div>
        <AnimatePresence>
            {shouldBlur && (
              <motion.div 
                key="blur-overlay"
                className="fixed inset-0 backdrop-blur-md bg-black/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            )}
          </AnimatePresence>
        
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

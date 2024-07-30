"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Foother from "@/components/Foother";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName=usePathname()
  
  return (
    <html lang="en">
      <body className={inter.className}>
        {!["/signin", "/signup"].includes(pathName) && <Header />}
        {children}
        {!["/signin", "/signup"].includes(pathName) && <Foother />}
      </body>
    </html>
  );
}

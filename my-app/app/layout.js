"use client"

import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster"
import { usePathname } from "next/navigation";
import { useState } from "react";
import { UpdateCartContext } from "@/context/UpdateCartContext";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [updateCart, setUpdateCart] = useState(false)//Every where this use State is used should be same as written here
  const params = usePathname();
  const showNav = !(params === '/SignIn' || params === '/create-account');

  return (
    <html lang="en">
      <body className={inter.className}>
        <UpdateCartContext.Provider value={{updateCart, setUpdateCart}}>
        {showNav && <Nav />}
        {children}
        <Toaster />
        <Footer />
        </UpdateCartContext.Provider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import {Inter , IBM_Plex_Serif, } from "next/font/google";
import "./globals.css";

 const inter = Inter({ subsets: ["latin"] ,
  variable: "--font-inter",
  display: "swap",
  weight: "400",
  preload: true
 });

 const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: "--font-ibm-plex-serif",
  display: "swap",
  weight: "400",
  preload: true
 })
export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is the next payment platform.",
  icons: {
    icon: "/public/logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable}   antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

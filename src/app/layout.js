import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MotionConfig } from "framer-motion"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Koding Hub - Jasa Joki & Tutor IT",
  description: "Solusi tugas koding dan belajar programming",
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/icon.png", renderer: 'image/png' }
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MotionConfig reducedMotion="user">
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}

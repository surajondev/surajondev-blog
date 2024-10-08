import type { Metadata } from "next";
import { Inter, VT323, Raleway } from "next/font/google";
import "./globals.css";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

const arcade = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-arcade",
});
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami-analytics-38efwq1d7-suraj-vishwakarmas-projects-f59ae002.vercel.app/script.js" data-website-id="a86067d4-47a2-4a73-8b82-4f03a051b13c"></script>
      </head>
      <body className={`${arcade.variable} ${raleway.variable}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

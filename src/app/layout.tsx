import type { Metadata } from "next";
import "./globals.css";
import Navbar from '../../components/Navbar';




export const metadata: Metadata = {
  title: "Kapela Malý Věci",
  description: "Mladá zábavová kapela z okolí Strakonic a Horažďovic",
  icons: {
    icon: "/favicon.svg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
    </head>
      <body>
        {children}
      </body>
    </html>
  );
}

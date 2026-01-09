import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Luxury House Kuyumculuk",
  description: "Premium jewelry store application featuring exclusive emerald and gold collections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${cinzel.variable} ${lato.variable} min-h-screen bg-luxury-black text-gray-100 font-sans selection:bg-luxury-gold selection:text-luxury-green-900`}
      >
        {children}
      </body>
    </html>
  );
}

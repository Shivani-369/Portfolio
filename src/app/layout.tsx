import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suja Shivani S A | Portfolio",
  description: "Computer Science student & Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memory Palace Bonanza",
  description: "Collaborative Parthenon memory workshop built with Next.js and three.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

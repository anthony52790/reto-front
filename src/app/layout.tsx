import type { Metadata } from "next";
import { heebo } from "@/lib/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "listado de productos"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${heebo.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Pasta de casa",
  description:
    "Pastas artesanales en concepción, frescas o congeladas listas para preparar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="">{children}</body>
    </html>
  );
}

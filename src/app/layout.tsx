import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "TechFix-It | Shop & Reparações",
  description: "Peças e serviços de reparação tecnológica profissional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <CartProvider>
          <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem>
            {children}
          </ThemeProvider>
        </CartProvider>
      </body>
    </html>
  );
}

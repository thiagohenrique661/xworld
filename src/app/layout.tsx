// layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// app/layout.tsx

export const metadata = {
  title: "XWorld",
  description: "Descrição do seu site",
  icons: {
    icon: "/favicon.ico", // Caminho da logo no public
    apple: "/favicon.ico", // Se quiser usar nos dispositivos Apple também
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
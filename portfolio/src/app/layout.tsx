import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hugo Visser — Webdesign voor lokale ondernemers",
  description: "Moderne websites voor lokale ondernemers in Utrecht en omgeving. Professioneel, snel en betaalbaar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

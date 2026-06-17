import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moshiran",
  description: "Launch page for Iran's premier construction company established 1982, showcasing landmark projects including multiple dams, major stadiums, Imam Khomeini International Airport, and positioning as the nation's leading builder with full project portfolio and company heritage",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
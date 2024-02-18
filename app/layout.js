import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Anonymouse Board",
  description:
    "The Anonymouse Board is a platform designed to empower individuals to express their thoughts, ideas, and opinions in a safe and anonymous environment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-4 py-2 text-gray-800 lg:px-8 lg:py-8 font-poppins">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

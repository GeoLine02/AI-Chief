import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import RecipesContextProvider from "@/context/RecipesContext";

export const metadata: Metadata = {
  title: "AI Chef",
  description:
    "AI Chef is web Application whre u can genrate dish recipes based on your ingrediends by using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecipesContextProvider>
      <html lang="en">
        <body className={`font-poorStory antialiased h-screen`}>
          <Header />
          {children}
        </body>
      </html>
    </RecipesContextProvider>
  );
}

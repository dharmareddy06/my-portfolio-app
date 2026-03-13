import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dharma Reddy Ponguru | AI Developer Portfolio",
  description:
    "Portfolio of Dharma Reddy Ponguru — AI Developer specializing in Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI. B.Tech in Artificial Intelligence.",
  keywords: [
    "AI Developer",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "Generative AI",
    "Dharma Reddy",
    "Portfolio",
    "Data Science",
  ],
  authors: [{ name: "Dharma Reddy Ponguru" }],
  openGraph: {
    title: "Dharma Reddy Ponguru | AI Developer Portfolio",
    description:
      "AI Developer specializing in ML, DL, NLP, CV, and Generative AI.",
    type: "website",
  },
};

import Preloader from "@/components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}

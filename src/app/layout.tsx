import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Faqs from "@/components/common/Faqs";
import GetInTouch from "@/components/common/GetInTouch";
import BackToTopButton from "@/components/common/BackToTopButton";

export const metadata: Metadata = {
  title: "Hyperleen",
  description: "Transform Your Data into AI Insights",
  metadataBase: new URL("https://hyperleen-next-student.vercel.app/"),
  openGraph: {
    title: "Hyperleen",
    description: "Transform Your Data into AI Insights",
    images: "/meta-img.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Faqs />
         <GetInTouch />
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}

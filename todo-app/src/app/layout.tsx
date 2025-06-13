import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/componentes/Navbar";
import { ContextTarefaProvider } from "@/data/ContextTarefa";
import TarefaProvider from '@/data/ContextTarefa';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AppWebReact - Conceitos introdutórios",
  description: "Aplicação web react para codar conceitos introdutórios da tecnologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TarefaProvider>
          <Navbar />
          <main className="p-6">{children}</main>
        </TarefaProvider>
      </body>
    </html>
  );
}

import "../../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { i18n } from "@/config/it8n.config";
import { MainProvider } from "@/providers/mainContext";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  const languages = i18n.locales.map((lang) => ({ lang }));
  return languages;
}

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A portfolio owned by Filipe Otavio",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <MainProvider>
        <body className={inter.className}>{children}</body>
      </MainProvider>
    </html>
  );
}

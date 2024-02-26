"use client";
import Header from "@/components/header/header";
import { Locale } from "@/config/it8n.config";
import { useMainContext } from "@/providers/mainContext";
import Link from "next/link";
import { useEffect } from "react";

export default function Home({ params }: { params: { lang: Locale } }) {
  const { setLanguage, language } = useMainContext();
  useEffect(() => setLanguage(params.lang), []);

  return (
    <main className="body min-h-screen">
      <Header />

      <Link href="/pt-BR">
        <button>Português</button>
      </Link>
      <Link href="/en-US">
        <button>Inglês</button>
      </Link>
    </main>
  );
}

import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Mare Atlantico Delikatessen | Köln";
const description = "Ausgewählte Delikatessen, frischer Fisch, Fleisch, Asia-Spezialitäten, Wein und Spirituosen für Gastronomie und Privatkunden in Köln.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title,
    description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { title, description, type: "website", url: origin, images: [{ url: `${origin}/og.png`, width: 1536, height: 910, alt: "Mare Atlantico – Gutes kommt von überall." }] },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}

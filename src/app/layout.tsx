import type { Metadata, Viewport } from "next";
import { person } from "@/content/profile";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.ccloud.co.za"),
  title: `${person.name} · ${person.role}`,
  description:
    "Full-stack developer working in TypeScript, React/Next.js and PostgreSQL. Experience, recent achievements and projects.",
  openGraph: {
    title: person.name,
    description: person.role,
    images: [person.photo],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6f8" },
    { media: "(prefers-color-scheme: dark)", color: "#191d2b" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased transition-colors duration-300">{children}</body>
    </html>
  );
}

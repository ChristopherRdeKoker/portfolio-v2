import type { Metadata, Viewport } from "next";
import { person } from "@/content/person";
import { site } from "@/content/site";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${person.name} · ${person.role}`,
  description: site.description,
  openGraph: {
    title: person.name,
    description: person.role,
    images: [person.photo],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: site.themeColors.light },
    { media: "(prefers-color-scheme: dark)", color: site.themeColors.dark },
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

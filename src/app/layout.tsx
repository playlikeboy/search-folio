import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-heading",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SearchFolio",
  description: "A portfolio that looks like a search engine.",
  keywords: ["portfolio", "search engine", "developer", "web development", "SEO"],
  authors: [{ name: "SearchFolio Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SearchFolio",
    description: "A portfolio that looks like a search engine.",
    url: "https://searchfolio-demo.pages.dev/",
    siteName: "SearchFolio",
    images: [
      {
        url: "https://img.youtube.com/vi/uu3lBlhAgo4/maxresdefault.jpg",
        width: 1280,
        height: 720,
        alt: "SearchFolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SearchFolio",
    description: "A portfolio that looks like a search engine.",
    images: ["https://img.youtube.com/vi/uu3lBlhAgo4/maxresdefault.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${roboto.variable} antialiased font-sans bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nsfbrain.org"),
  title: {
    template: "%s | The BRAIN Center",
    default:
      "The BRAIN Center — Building Reliable Advances and Innovations in Neurotechnology",
  },
  description:
    "An NSF-funded IUCRC advancing neurotechnology research and innovation.",
  openGraph: {
    siteName: "The BRAIN Center",
    type: "website",
    locale: "en_US",
    images: [{ url: "/brain-center.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  name: "The BRAIN Center",
  url: "https://www.nsfbrain.org",
  logo: "https://www.nsfbrain.org/brain-center.png",
  description:
    "Building Reliable Advances and Innovations in Neurotechnology — an NSF-funded Industry–University Cooperative Research Center (IUCRC).",
  funder: {
    "@type": "GovernmentOrganization",
    name: "National Science Foundation",
    url: "https://www.nsf.gov",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans antialiased overflow-x-hidden">
        <Header />
        <main id="main" className="w-full flex-grow">
          {children}
        </main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}

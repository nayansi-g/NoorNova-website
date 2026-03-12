import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import ContactButtons from "@/components/ContactButton";
import { DemoModalProvider } from "@/components/DemoModalProvider";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : new URL("http://localhost:3000");

export const metadata = {
  metadataBase: siteUrl,
  applicationName: "NoorNova",
  title: {
    default: "NoorNova | AI Automation for Local Businesses",
    template: "%s | NoorNova",
  },
  description:
    "NoorNova builds AI automation tools that help local businesses capture every lead, answer every call, and grow revenue.",
  keywords: [
    "AI automation",
    "AI voice agents",
    "lead generation",
    "appointment booking",
    "local business automation",
    "customer support automation",
    "WhatsApp automation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "NoorNova | AI Automation for Local Businesses",
    description:
      "Capture every lead, answer every call, and grow revenue with NoorNova AI automation.",
    siteName: "NoorNova",
    images: [
      {
        url: "/LogoMain.png",
        width: 1200,
        height: 630,
        alt: "NoorNova — AI automation for local businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NoorNova | AI Automation for Local Businesses",
    description:
      "Capture every lead, answer every call, and grow revenue with NoorNova AI automation.",
    images: ["/LogoMain.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/LogoMain.png" }],
    apple: [{ url: "/LogoMain.png" }],
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NoorNova",
    url: siteUrl.toString(),
    logo: new URL("/LogoMain.png", siteUrl).toString(),
    description:
      "NoorNova builds AI automation tools that help local businesses capture every lead, answer every call, and grow revenue.",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NoorNova",
    url: siteUrl.toString(),
  };

  return (
    <html lang="en">
      <body className="min-h-dvh overflow-x-hidden bg-white text-slate-900 antialiased">
        <DemoModalProvider>
          <Script
            id="ld-org"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
          />
          <Script
            id="ld-website"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          />
          <Navbar />
          {children}
          <Footer />
          <ContactButtons />
        </DemoModalProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { GrainOverlay } from "@/components/common/GrainOverlay";
import { BackToTop } from "@/components/common/BackToTop";
import {
  BRAND_NAME,
  BRAND_TAGLINE,
  CAMPUS_LOCATION,
  CONTACT_EMAIL,
} from "@/constants/brand";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://campuseats.com"),
  title: "CampusEats – Campus food delivery at VIT-AP",
  description: BRAND_TAGLINE,
  keywords: [
    "CampusEats",
    "VIT-AP food delivery",
    "VIT-AP Food Street",
    "campus dining Amaravati",
    "hostel food delivery",
    "pre-book campus food",
    "student delivery partner",
  ],
  authors: [{ name: BRAND_NAME }],
  creator: BRAND_NAME,
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://campuseats.com",
    title: "CampusEats – Campus food delivery at VIT-AP",
    description: BRAND_TAGLINE,
    siteName: BRAND_NAME,
    images: [
      {
        url: "/images/social.jpg",
        width: 1200,
        height: 630,
        alt: `${BRAND_NAME} - VIT-AP Campus Food Delivery`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CampusEats – Campus food delivery at VIT-AP",
    description: BRAND_TAGLINE,
    images: ["/images/social.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND_NAME,
  url: "https://campuseats.com",
  logo: "https://campuseats.com/images/logo-peach.svg",
  description: BRAND_TAGLINE,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Amaravati",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: CONTACT_EMAIL,
    contactType: "customer service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${archivoBlack.variable} relative bg-cream text-dark antialiased`}>
        <SmoothScroll>
          <GrainOverlay />
          {children}
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Prevent FontAwesome from adding its CSS since we did it manually above
config.autoAddCss = false;

// ---------- Fonts ----------
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ---------- Site constants ----------
const SITE = {
  name: "Hilwan General Land Transport L.L.C.",
  shortName: "Hilwan Transport",
  url: "https://hilwantransport.ae",
  description:
    "Professional rental cranes, cargo transport by light and heavy trucks, and construction logistics in the UAE since 1994.",
  phone: "+971555557860",
  phoneDisplay: "055 555 7860",
  email: "hilwantransport@gmail.com",
  whatsappNumber: "971555557860",
  locale: "en_AE",
} as const;

const whatsappMessage = encodeURIComponent(
  "Hello, I am interested in learning more about your crane rental, transport, and logistics services. Please provide more details."
);
const whatsappLink = `https://wa.me/${SITE.whatsappNumber}?text=${whatsappMessage}`;
const phoneTel = `tel:${SITE.phone}`;

// ---------- Viewport (Next 14+ API) ----------
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f2937",
};

// ---------- Metadata (Next.js Metadata API) ----------
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s | ${SITE.shortName}`,
  },
  description: `${SITE.description} Contact: ${SITE.phoneDisplay}, ${SITE.email}.`,
  applicationName: SITE.shortName,
  authors: [{ name: SITE.name, url: SITE.url }],
  generator: "Next.js",
  keywords: [
    "crane rental",
    "crane hire",
    "heavy transport",
    "cargo transport",
    "truck rental",
    "construction logistics",
    "Dubai",
    "UAE",
    "Hilwan",
    "Hilwantransport",
    "heavy equipment",
    "mobile crane",
    "crawler crane",
    "rough terrain crane",
    "spider crane",
    "trailer rental",
    "manlift",
    "scissor lift",
    "shipping",
    "manufacturing",
    "oil and gas",
    "marine",
    "logistics company",
  ],
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: ["/logo.png"],
  },
  verification: {
    google: "wGTKgw-IERoRYfKPBcOPUu7hqAm6xql1YWVWXuRaK5Q",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  category: "business",
};

// ---------- Structured data (JSON-LD) ----------
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  description: SITE.description,
  foundingDate: "1994",
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressCountry: "AE",
    addressRegion: "Dubai",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic"],
    },
  ],
  sameAs: [
    "https://facebook.com",
    "https://instagram.com",
    "https://linkedin.com",
  ],
};

// ---------- Floating Action Button styles ----------
const fabContainerStyle: React.CSSProperties = {
  position: "fixed",
  right: 24,
  bottom: 24,
  zIndex: 1000,
  display: "flex",
  flexDirection: "column",
  gap: 12,
  alignItems: "flex-end",
};

const fabRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  textDecoration: "none",
};

const fabLabelStyle: React.CSSProperties = {
  background: "#1f2937",
  color: "#fff",
  fontSize: 14,
  fontWeight: 600,
  padding: "8px 12px",
  borderRadius: 999,
  boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
  whiteSpace: "nowrap",
};

const fabIconBase: React.CSSProperties = {
  borderRadius: "50%",
  width: 60,
  height: 60,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  fontSize: 28,
  color: "#fff",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
};

// ---------- FAB component ----------
type FabLinkProps = {
  href: string;
  label: string;
  ariaLabel: string;
  icon: typeof faPhone;
  background: string;
  iconFontSize?: number;
  external?: boolean;
};

function FabLink({
  href,
  label,
  ariaLabel,
  icon,
  background,
  iconFontSize,
  external = false,
}: FabLinkProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      style={fabRowStyle}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <span style={fabLabelStyle}>{label}</span>
      <span
        style={{
          ...fabIconBase,
          background,
          ...(iconFontSize ? { fontSize: iconFontSize } : {}),
        }}
      >
        <FontAwesomeIcon icon={icon} />
      </span>
    </a>
  );
}

// ---------- Root layout ----------
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          style={{
            position: "absolute",
            left: -9999,
            top: "auto",
            width: 1,
            height: 1,
            overflow: "hidden",
          }}
        >
          Skip to main content
        </a>

        <main id="main-content">{children}</main>

        {/* Floating contact actions */}
        <nav
          aria-label="Quick contact"
          style={fabContainerStyle}
        >
          <FabLink
            href={phoneTel}
            label="Call Us"
            ariaLabel={`Call us at ${SITE.phoneDisplay}`}
            icon={faPhone}
            background="#25D366"
          />
          <FabLink
            href={whatsappLink}
            label="Let's Talk! "
            ariaLabel="Chat with us on WhatsApp"
            icon={faWhatsapp}
            background="#25D366"
            iconFontSize={32}
            external
          />
        </nav>

        {/* JSON-LD structured data (after content so it doesn't block render) */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
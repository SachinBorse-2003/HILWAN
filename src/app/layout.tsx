import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const whatsappNumber = "971588888302";
const whatsappMessage = encodeURIComponent("Hello, I am interested in learning more about your crane rental, transport, and logistics services. Please provide more details.");
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export const metadata: Metadata = {
  title: "Hilwan General Land Transport L.L.C.",
  description:
    "Hilwantransport.ae - Professional rental cranes, cargo transport by light and heavy trucks, and construction logistics in the UAE since 1994. Contact: +971 58 888 8302, hilwantransport@gmail.com.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="crane rental, crane hire, heavy transport, cargo transport, truck rental, construction logistics, Dubai, UAE, Hilwan, Hilwantransport, heavy equipment, mobile crane, crawler crane, rough terrain crane, spider crane, trailer rental, manlift, scissor lift, shipping, manufacturing, oil and gas, marine, logistics company" />
        <meta property="og:title" content="Hilwan General Land Transport L.L.C." />
        <meta property="og:description" content="Professional rental cranes, cargo transport by light and heavy trucks, and construction logistics in the UAE since 1994." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hilwantransport.ae/" />
        <meta property="og:image" content="https://hilwantransport.ae/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hilwan General Land Transport L.L.C." />
        <meta name="twitter:description" content="Professional rental cranes, cargo transport by light and heavy trucks, and construction logistics in the UAE since 1994." />
        <meta name="twitter:image" content="https://hilwantransport.ae/logo.png" />
        <link rel="canonical" href="https://hilwantransport.ae/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Hilwan General Land Transport L.L.C.",
            "url": "https://hilwantransport.ae/",
            "logo": "https://hilwantransport.ae/logo.png",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+971588888302",
              "contactType": "customer service",
              "areaServed": "AE",
              "availableLanguage": ["English", "Arabic"]
            }],
            "sameAs": [
              "https://facebook.com",
              "https://instagram.com",
              "https://linkedin.com"
            ]
          }
        `}</script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener"
          aria-label="WhatsApp"
          style={{
            position: "fixed",
            right: 24,
            bottom: 24,
            zIndex: 1000,
            background: "#25D366",
            color: "#fff",
            borderRadius: "50%",
            width: 60,
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px #2228",
            fontSize: 32,
            transition: "box-shadow 0.2s"
          }}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </body>
    </html>
  );
}

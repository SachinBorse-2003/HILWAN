import type { Metadata } from "next";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


const whatsappNumber = "971588888302";
const whatsappMessage = encodeURIComponent("Hello, I am interested in learning more about your crane rental, transport, and logistics services. Please provide more details.");
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hilwantransport.ae"),
  title: "Hilwan General Land Transport L.L.C.",
  description:
    "Hilwantransport.ae - Professional rental cranes, cargo transport by light and heavy trucks, and construction logistics in the UAE since 1994. Contact: +971 58 888 8302, hilwantransport@gmail.com.",
  keywords: [
    "Hilwan",
    "crane rental",
    "cargo transport",
    "logistics",
    "UAE",
  ],
  openGraph: {
    title: "Hilwan General Land Transport L.L.C.",
    description:
      "Professional crane rental and heavy transport services across the UAE.",
    url: "https://www.hilwantransport.ae",
    siteName: "Hilwan General Land Transport L.L.C.",
    images: ["/logo.jpeg"],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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

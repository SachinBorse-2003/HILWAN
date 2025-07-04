import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Hilwan General Land Transport L.L.C.",
  description:
    "Get in touch with Hilwan General Land Transport for crane rental and logistics services across the UAE."
};

export default function ContactPage() {
  return <ContactClient />;
}

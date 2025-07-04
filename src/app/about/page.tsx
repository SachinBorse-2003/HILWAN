import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Hilwan General Land Transport L.L.C.",
  description:
    "Learn about Hilwan General Land Transport, a trusted provider of crane rental, transport and logistics in the UAE since 1994."
};

export default function AboutPage() {
  return <AboutClient />;
}

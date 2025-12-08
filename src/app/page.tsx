"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Promo from "@/components/Promo";
import About from "@/components/About";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />

      <main className="main">
        <Hero />
        <Promo />
        <About />
        <Features />
        <Screenshots />
        <Process />
        <Pricing />
        <Faq />
        <Testimonials />
        <Team />
        <Contact />
        <Blog />
        <Clients />
      </main>

      <Footer />
    </>
  );
}

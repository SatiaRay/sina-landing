"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />

      <main className="main">
        <Hero />
        <About />
        <Features />
        <Process />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

import React from "react";
import { BackgroundLines } from "../components/ui/background-lines";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useTransform, useScroll } from "framer-motion";
import { Button } from "@/components/ui/moving-border";
import { ServicesSection } from "@/components/ui/services-section";
import { AboutSection } from "@/components/ui/about-section";
import { GallerySection } from "@/components/ui/gallery-section";
import { YoutubeSection } from "@/components/ui/youtube-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { ContactSection } from "@/components/ui/contact-section";
import Link from "next/link";

function Index() {
  const words = [
    {
      text: "Furniture",
    },
    {
      text: "That",
    },
    {
      text: "Speaks",
    },
    {
      text: "Quality",
      className: "text-[#7D4FEC]",
    },
  ];

  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <>
      {/* Hero Section */}
      <div className="h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-b from-white to-[#7D4FEC]/10">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <TypewriterEffectSmooth words={words} />
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Bringing Your Vision to Life with Expert Carpentry
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center mt-4">
            Jitu Panchal – Crafting Furniture with Precision & Passion
          </p>
          <div className="mt-8">
            <Link href="/services/1">
              <Button className="w-40 h-12 rounded-xl bg-[#7D4FEC] border border-transparent text-white text-sm hover:bg-[#6B3FD9] transition-colors">
                Explore Our Work
              </Button>
            </Link>
          </div>
        </BackgroundLines>
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* YouTube Section */}
      <YoutubeSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}

export default Index;

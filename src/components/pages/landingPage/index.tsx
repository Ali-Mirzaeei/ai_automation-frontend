"use client";

import CallToActionSection from "@/components/modules/CallToActionSection";
import DemoSection from "@/components/modules/DemoSection";
import Footer from "@/components/modules/Footer";
import HeroSection from "@/components/modules/HeroSection";
import TransparencyBox from "@/components/modules/TransparencyBox";
import UseCasesSection from "@/components/modules/UseCasesSection";
import PageLayout from "@/components/organisms";
import React, { useRef } from "react";

function LandingPage() {
  const contentRef = useRef<HTMLElement>(null);

  const handleScrollClick = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageLayout>
      <div className="h-screen flex flex-col">
        <HeroSection onScrollClick={handleScrollClick} />
        <DemoSection />
      </div>
      <main
        ref={contentRef}
        className="container mx-auto px-6 pt-20 pb-20 flex flex-col gap-20 md:gap-32"
      >
        <UseCasesSection />
        <CallToActionSection />
        <TransparencyBox />
      </main>
      <Footer />
    </PageLayout>
  );
}

export default LandingPage;

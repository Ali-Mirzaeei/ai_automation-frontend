"use client";

import LandingPage from "@/components/landingPage";
import MainProvider from "@/core/providers/mainProvider";

export default function Home() {
  return (
    <MainProvider>
      <LandingPage />
    </MainProvider>
  );
}

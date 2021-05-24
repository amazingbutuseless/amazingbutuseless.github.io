import React from "react";
import UAParser from "ua-parser-js";

import Hero from "../components/Hero";
import MobileHero from "../components/MobileHero";
import IntroduceSection from "../components/IntroduceSection";
import FeatureSection from "../components/FeatureSection";
import ContactSection from "../components/ContactSection";
import DownloadButton from "../components/DownloadButton";

const IndexPage = () => {
  const device = new UAParser().getDevice().type;
  const forMobile = ["mobile", "tablet"].includes(device);

  return (
    <main>
      <title>ijustwannaseewonwoo</title>
      {forMobile ? <MobileHero /> : <Hero />}

      <IntroduceSection>
        <DownloadButton />
      </IntroduceSection>
      <FeatureSection />
      <ContactSection />
    </main>
  );
};

export default IndexPage;

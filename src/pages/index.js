import React from "react";
import Hero from "../components/Hero";

import IntroduceSection from "../components/IntroduceSection";
import FeatureSection from "../components/FeatureSection";
import ContactSection from "../components/ContactSection";
import DownloadButton from "../components/DownloadButton";

const IndexPage = () => {
  return (
    <main>
      <title>ijustwannaseewonwoo</title>
      <Hero />

      <IntroduceSection>
        <DownloadButton />
      </IntroduceSection>
      <FeatureSection />
      <ContactSection />
    </main>
  );
};

export default IndexPage;

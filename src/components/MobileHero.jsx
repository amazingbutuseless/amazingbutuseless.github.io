import React from "react";
import styled from "@emotion/styled";

const HeroVideoWrapper = styled.section`
  position: relative;
  margin-bottom: 0.8rem;
  padding-top: 56.25%;
`;

const HeroVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default function MobileHero() {
  return (
    <HeroVideoWrapper>
      <span
        style={{
          display: "block",
          position: "relative",
          marginBottom: "0.8rem",
          paddingTop: "56.25%",
        }}
      >
        <HeroVideo
          src="./static/hero.mp4"
          playsInline={true}
          muted={true}
          autoPlay={true}
        />
      </span>
    </HeroVideoWrapper>
  );
}

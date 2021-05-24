import React, { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";

import Logo from "./Logo";
import HeroImage from "./HeroImage";

const HeroStyle = styled.section`
  position: relative;
`;

const HeroImageWrapper = styled.div`
  position: relative;
  height: 200vh;

  @media screen and (min-width: 1280px) {
    height: 240vh;
  }
`;

const HeroVideoWrapper = styled.div`
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

export default function Hero() {
  const HERO_TOTAL_FRAMES = 186;

  const heroWrapper = useRef(null);

  const [currentFrame, updateCurrentFrame] = useState(1);
  const [frameImage, setFrameImage] = useState(null);
  const [imageDegree, setImageDegree] = useState(0);
  const [logoOpacity, setLogoOpacity] = useState(1);

  const getFrameImageSrc = (frameIndex = currentFrame) => {
    return `./static/hero/desktop/hero${frameIndex
      .toString()
      .padStart(4, "0")}.jpg`;
  };

  const preloadImage = () => {
    for (let i = 1; i <= HERO_TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameImageSrc(i);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const wrapper = heroWrapper.current;

      if (!wrapper) return;

      const scrollTop = document.documentElement.scrollTop;
      const maxScrollTop = wrapper.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;

      const frameIndex = Math.min(
        HERO_TOTAL_FRAMES - 1,
        Math.floor(scrollFraction * HERO_TOTAL_FRAMES)
      );

      if (frameIndex >= 62) {
        document.body.style.backgroundColor = "rgba(255, 255, 255, 1)";
      } else {
        document.body.style.backgroundColor = "";
      }

      requestAnimationFrame(() => updateCurrentFrame(frameIndex));
      setImageDegree(frameIndex > 90 ? frameIndex / HERO_TOTAL_FRAMES : 0);
      const opacity = frameIndex >= 38 ? Math.max(0, 1 - frameIndex / 62) : 1;
      setLogoOpacity(opacity);
    };

    window.addEventListener("scroll", onScroll);

    preloadImage();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = getFrameImageSrc();
    img.onload = () => setFrameImage(img);
  }, [currentFrame]);

  return (
    <HeroStyle>
      <HeroImageWrapper ref={heroWrapper}>
        <HeroImage frame={frameImage} degree={imageDegree} />
      </HeroImageWrapper>
      <Logo style={{ opacity: logoOpacity.toFixed(2) }} />
    </HeroStyle>
  );
}

export function MobileHero() {
  return (
    <HeroVideoWrapper>
      <HeroVideo
        src="./static/hero.mp4"
        playsInline={true}
        muted={true}
        autoPlay={true}
      />
    </HeroVideoWrapper>
  );
}

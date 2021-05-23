import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";

import Logo from "./Logo";
import HeroImage from "./HeroImage";

const HeroStyle = css`
  position: relative;
`;

const HeroImageWrapper = css`
  position: relative;
  height: 200vh;

  @media screen and (min-width: 1280px) {
    height: 240vh;
  }
`;

export default function Hero() {
  const HERO_TOTAL_FRAMES = 186;

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
      const scrollTop = document.documentElement.scrollTop;
      const maxScrollTop =
        document.querySelector("#hero-wrapper").scrollHeight -
        window.innerHeight;
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
    <section css={HeroStyle}>
      <div id="hero-wrapper" css={HeroImageWrapper}>
        <HeroImage frame={frameImage} degree={imageDegree} />
      </div>
      <Logo style={{ opacity: logoOpacity.toFixed(2) }} />
    </section>
  );
}

export function MobileHero() {
  return (
    <div
      style={{
        position: "relative",
        marginBottom: ".8rem",
        paddingTop: "56.25%",
      }}
    >
      <video
        id="hero-video"
        src="./static/hero.mp4"
        playsInline={true}
        muted={true}
        autoPlay={true}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

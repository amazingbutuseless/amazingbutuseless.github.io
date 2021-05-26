import React, { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";

import Logo from "./Logo";
import HeroImage from "./HeroImage";

export const HeroStyle = styled.section`
  position: relative;
`;

export default function Hero() {
  const HERO_TOTAL_FRAMES = 186;

  const heroWrapper = useRef(null);

  const [currentFrame, updateCurrentFrame] = useState(1);
  const [frameImage, setFrameImage] = useState(null);
  const [logoOpacity, setLogoOpacity] = useState(1);

  /**
   * Decision Log
   * gatsby 빌드시 window 객체를 확인 할 수 없으므로, useEffect 시점에 window 객체를 참조하여
   * image wrapper의 style을 결정한다.
   */
  const [imageWrapperHeight, setImageWrapperHeight] = useState(
    "calc(9 / 16 * 400vw)"
  );

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
      const opacity = frameIndex >= 38 ? Math.max(0, 1 - frameIndex / 62) : 1;
      setLogoOpacity(opacity);
    };

    window.addEventListener("scroll", onScroll);

    if (window.innerHeight > (9 / 16) * window.innerWidth * 2.5) {
      setImageWrapperHeight("200vh");
    }

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
      <div
        ref={heroWrapper}
        style={{ position: "relative", height: imageWrapperHeight }}
      >
        <HeroImage frame={frameImage} />
      </div>
      <Logo style={{ opacity: logoOpacity.toFixed(2) }} />
    </HeroStyle>
  );
}

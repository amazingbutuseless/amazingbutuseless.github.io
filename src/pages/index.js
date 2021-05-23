import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

const SectionTitle = styled.h2`
  margin: 0;
  padding: 0;
  color: #fff;
`;

const SectionStyle = css`
  position: relative;
  background-color: var(--primary-color);
`;

const SectionContentStyle = css`
  padding: 0.8rem 1.6rem;
  color: var(--background-color);

  p {
    font-size: 1.4rem;
    color: #fff;
    line-height: 1.5;
    word-break: keep-all;
  }

  @media screen and (min-width: 1280px) {
    padding: 3.2rem 4rem;
  }
`;

const importantParagraphStyle = css`
  padding: 0.4rem;
  background-color: #7b2cbf60;
`;

const Wave = styled.svg`
  position: absolute;
  left: 0;
  z-index: 1;
`;

const IndexPage = () => {
  return (
    <main>
      <title>ijustwannaseewonwoo</title>
      <Hero />

      <IntroduceSection />
      <section css={SectionStyle}>
        <div css={SectionContentStyle}>
          <SectionTitle>기능</SectionTitle>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;

function IntroduceSection() {
  const [viewportWidth, updateViewportWidth] = useState(
    document.documentElement.clientWidth
  );

  const setViewportWidth = () => {
    updateViewportWidth(document.documentElement.clientWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setViewportWidth);

    return () => {
      window.removeEventListener("resize", setViewportWidth);
    };
  }, []);

  return (
    <section css={SectionStyle}>
      <Wave
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          top: `calc(-30.5rem * ${(viewportWidth / 1440).toFixed(2)})`,
        }}
      >
        <path
          fill="#9d4edd"
          fillOpacity="1"
          d="M0,256L60,245.3C120,235,240,213,360,224C480,235,600,277,720,266.7C840,256,960,192,1080,170.7C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </Wave>
      <div css={SectionContentStyle}>
        <SectionTitle>
          ijustwannaseewonwoo - 원우가 나온 유튜브 비디오 장면 모아보기
        </SectionTitle>
        <p>
          덕 때문에 앞으로 봐야 할 영상이 지금까지 본 영상보다 많다는 기쁨을
          누린 것도 잠깐,
          <br />
          매일매일 일에 치이고 돌아와 새벽까지 원우 영상을 보면서 힐링을 하던
          덕후는 금세 체력 고갈때문에 광광 울게 되었어요.
          <br />
          그리고 이런 생각을 하게 되었습니다.
        </p>
        <p>
          "내가 원우가 나온 장면을 보기 위해 모든 영상을 찾아 보지 않더라도,
          <br />좀 더 쉽게 원우가 나온 영상, 장면을 볼 수 있는 방법이 있으면
          좋겠다.어쩌면 AI의 도움을 받을 수 있지 않을까?"
        </p>
        <p>
          <span css={importantParagraphStyle}>
            twannaseewonwoo는 이런 생각끝에 만든 "원우가 나온 유튜브 비디오 장면
            모아보기" 프로젝트입니다.
          </span>
        </p>
      </div>
    </section>
  );
}

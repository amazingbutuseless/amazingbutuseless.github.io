import React from "react";
import styled from "@emotion/styled";

import {
  SectionStyle,
  SectionContentStyle,
  SectionTitle,
} from "./Section.style";

const FeatureBoxStyle = styled.div`
  margin-top: 2.4rem;
  padding: 2.4rem 1.6rem;
  padding-bottom: 0;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 4px;
  color: var(--background-color);

  h3 {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    color: var(--primary-color);
    letter-spacing: -1px;
    word-break: keep-all;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    max-width: 100%;
  }
`;

const FeatureFlexBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  strong {
    color: var(--primary-color);
    font-weight: 300;
  }

  ${FeatureBoxStyle} {
    display: flex;
    padding: 0;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    margin: 0 -1.2rem;
    margin-top: 2.4rem;

    ${FeatureBoxStyle} {
      margin: 0 1.2rem;
      width: 50%;
    }
  }
`;

function SceneRegisteredVideoFeature() {
  return (
    <FeatureBoxStyle>
      <h3>나온 장면을 보는 제일 쉬운 방법 - 플레이리스트 속 😻를 찾으세요.</h3>
      <p>
        등록되면 플레이리스트 비디오 목록 속 섬네일 이미지 위에 고양이 이모지가
        표시됩니다.
        <br />
        바쁘다바빠현대사회, 도무지 비디오 전체를 볼 시간이 나지 않을 때,
        봤던비디오또보고또보고하면서 원우가 나온 장면만 복습하고 싶을 때 -
        고양이를 찾아 원우가 나온 장면을 확인해보세요.
      </p>
      <picture>
        <source srcSet="./static/feature1_d.png" media="(min-width: 1280px)" />
        <img src="./static/feature1_m.png" />
      </picture>
    </FeatureBoxStyle>
  );
}

function AutoPlayFeature() {
  return (
    <FeatureBoxStyle style={{ alignItems: "center" }}>
      <img
        src="./static/feature2.png"
        style={{
          width: "240px",
          height: "auto",
        }}
        alt=""
      />
      <div style={{ padding: "2.4rem", paddingLeft: "0" }}>
        <h3>장면 자동 재생하기</h3>
        <p>
          등록된 비디오라면 기본적으로 등록된 장면만을 자동 재생합니다.
          <br />
          장면 외에 비디오 전체 또는 특정 부분을 재생하고 싶다면 비디오를 보던
          것처럼 플레이어에서 재생 지점을 선택하거나, "장면 자동 재생"을 비활성
          시킬 수 있습니다.
        </p>
      </div>
    </FeatureBoxStyle>
  );
}

function AddSceneFeature() {
  return (
    <FeatureBoxStyle
      style={{ flexDirection: "column", justifyContent: "space-between" }}
    >
      <div style={{ marginTop: "auto", padding: "2.4rem 1.6rem" }}>
        <h3>장면 추가하기</h3>
        <p>
          록되지 않은 비디오라면, 또는 내가 알고 있는 장면이 등록되지 않은
          경우라면 비디오에 장면을 추가할 수 있습니다.
        </p>
        <p>
          추가된 장면은 ijustwannaseewonwoo를 이용하는 다른 원우팬들에게 오를 볼
          수 있게 도와줄 뿐만 아니라, 장면 등록 과정 얼굴 데이터 수집을 통해서
          앞으로 많은 비디오에서 찾아내는데 도움을 주게 됩니다.
        </p>
        <p>
          <strong>
            장면이 등록되지 않은 비디오, 빠진 장면들이 있는 비디오가 눈에 띈다면
            부디 그냥 지나치지 마시고 장면을 등록해주세요.😽
          </strong>
        </p>
      </div>

      <img src="./static/feature3.png" alt="" />
    </FeatureBoxStyle>
  );
}

export default function FeatureSection() {
  return (
    <section css={SectionStyle}>
      <div css={SectionContentStyle}>
        <SectionTitle>Features.</SectionTitle>

        <SceneRegisteredVideoFeature />

        <FeatureFlexBoxStyle>
          <AutoPlayFeature />
          <AddSceneFeature />
        </FeatureFlexBoxStyle>
      </div>
    </section>
  );
}

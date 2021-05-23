import React from "react";
import { css } from "@emotion/react";

import LogoImage from "../../public/static/logo.svg";

const LogoImageWrapperStyle = css`
  position: fixed;
  left: 1.6rem;
  top: 50%;
  color: var(--primary-color);
  z-index: 2;

  @media screen and (min-width: 1280px) {
    left: 6.4rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const LogoImageStyle = css`
  width: auto;
  height: 4.8rem;

  @media screen and (min-width: 1280px) {
    height: 6rem;
  }
`;

export default function Logo() {
  return (
    <div css={LogoImageWrapperStyle}>
      <h1>늦덕이라도,</h1>
      <img src={LogoImage} css={LogoImageStyle} alt="ijustwannasee" />
    </div>
  );
}

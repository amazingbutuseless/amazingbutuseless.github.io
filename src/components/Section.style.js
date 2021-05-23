import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const SectionTitle = styled.h2`
  margin: 0;
  margin-bottom: 1.6rem;
  padding: 0;
  font-size: 2.4rem;
  line-height: 1.3;
  letter-spacing: -1px;
  word-break: keep-all;
`;

export const SectionStyle = css`
  position: relative;
  background-color: var(--primary-color);
`;

export const SectionContentStyle = css`
  padding: 0.8rem 1.6rem;
  color: #fff;

  p {
    margin: 0.8rem 0;
    padding: 0;
    font-size: 1.4rem;
    line-height: 1.5;
    word-break: keep-all;
  }

  @media screen and (min-width: 1280px) {
    padding: 3.2rem 4rem;
  }
`;

export const ImportantParagraphStyle = css`
  padding: 0.4rem;
  background-color: #7b2cbf60;
  line-height: 1.8;
`;

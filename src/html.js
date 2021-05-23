import React from "react";
import PropTypes from "prop-types";

import { css } from "@emotion/react";

const htmlStyle = css`
  --primary-color: #9d4edd;
  --background-color: #121212;
  --font-color: #a8a8a8;
  height: 100vh;
  font-size: 10px;
`;

const bodyStyle = css`
  margin: 0;
  background-color: var(--background-color);
  font-family: "Gothic A1", sans-serif;
  color: var(--font-color);
`;

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} css={htmlStyle}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          href="/static/favicon.ico"
          type="image/x-icon"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} css={bodyStyle}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};

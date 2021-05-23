import React, { useEffect, useState } from "react";
import UAParser from "ua-parser-js";
import { css } from "@emotion/react";

const DownloadButtonStyle = css`
  margin-left: 1.6rem;
  margin-bottom: 4rem;
  color: #fff;

  strong {
    display: block;
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
  }

  button {
    padding: 1.6rem;
    background-color: #fff;
    border: 0;
    outline: 2px solid #fff;
    outline-offset: 2px;
    font-size: 1.4rem;
    color: var(--primary-color);
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    margin: 0 8rem 0 auto;
  }
`;

export default function DownloadButton() {
  const [buttonLabel, setButtonLabel] = useState("Download");
  const [downloadUrl, setDownloadUrl] = useState("");

  const onDownloadButtonClick = () => {
    window.open(downloadUrl);
  };

  const getUserOs = () => {
    const uaParser = new UAParser();
    return uaParser.getOS();
  };

  const setButton = (assets) => {
    const os = getUserOs();

    if (os.name === "Mac OS") {
      const targetBuild = assets.find((asset) => {
        return asset.browser_download_url.endsWith(".dmg");
      });

      setDownloadUrl(targetBuild.browser_download_url);
      setButtonLabel(targetBuild.name);

      return;
    }
  };

  useEffect(() => {
    async function fetchReleases() {
      const response = await fetch(
        "https://api.github.com/repos/amazingbutuseless/ijustwannaseewonwoo/releases/latest"
      );

      const { assets } = await response.json();
      setButton(assets);
    }

    fetchReleases();
  }, []);

  return (
    <div css={DownloadButtonStyle}>
      {downloadUrl && <strong>다운로드 for {getUserOs().name}</strong>}
      <button onClick={onDownloadButtonClick}>{buttonLabel}</button>
    </div>
  );
}

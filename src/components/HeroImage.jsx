import React, { useMemo, useRef } from "react";

import styled from "@emotion/styled";

const HeroImageCanvas = styled.canvas`
  position: sticky;
  top: 50%;
  width: 100vw;
  height: auto;
  transform: rotate(
    ${({ degree }) =>
      degree > 0 ? degree.toFixed(2) : "0"}deg) translateY(-50%);
  );
`;

export default function HeroImage({ frame }) {
  const canvasRef = useRef(null);

  const context = useMemo(() => {
    if (!canvasRef.current) return;

    return canvasRef.current.getContext("2d");
  }, [canvasRef.current]);

  if (context && frame) {
    context.drawImage(frame, 0, 0);
  }

  return <HeroImageCanvas width={2560} height={1440} ref={canvasRef} />;
}

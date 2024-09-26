import React from "react";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../auth/useAuthContext";
import styled from "@emotion/styled";

// ----------------------------------------------------------------------

const StyledRoot = styled.div<any>`
  right: 0;
  bottom: 0;
  z-index: 9998;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
`;
// ----------------------------------------------------------------------

export default function LoadingScreen() {
  const { pathname } = useLocation();

  const isDesktop = true;

  const { isInitialized } = useAuthContext();

  const isDashboard =
    isInitialized && pathname.includes("/dashboard") && isDesktop;

  return (
    <>
      <StyledRoot>
        {isDashboard ? <div>Loading...</div> : <div>Loading...</div>}
      </StyledRoot>
    </>
  );
}

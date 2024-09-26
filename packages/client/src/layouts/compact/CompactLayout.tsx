import { Outlet } from "react-router-dom";
import useOffSetTop from "../../hooks/useOffSetTop";
import { HEADER } from "../../config-global";
import Header from "./Header";
import React from "react";
import styled from "@emotion/styled";

// ----------------------------------------------------------------------

const Wrapper = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: none;
  flex-grow: 0;
  align-self: stretch;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
`;

// ----------------------------------------------------------------------

export default function CompactLayout() {
  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

  return (
    <>
      <Header isOffset={isOffset} />

      <Wrapper component="main">
        <Outlet />
      </Wrapper>
    </>
  );
}

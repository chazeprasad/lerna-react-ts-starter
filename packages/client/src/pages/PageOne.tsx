import { Helmet } from "react-helmet-async";
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

export default function PageOne() {
  return (
    <>
      <Helmet>
        <title> Page One | Broadcom</title>
      </Helmet>
      <Wrapper>
        <h4>Page One</h4>
      </Wrapper>
    </>
  );
}

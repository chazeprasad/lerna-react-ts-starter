import { Helmet } from "react-helmet-async";
import styled from "@emotion/styled";
import React from "react";

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

export default function PageTwo() {
  return (
    <>
      <Helmet>
        <title> Page Two | Broadcom</title>
      </Helmet>

      <Wrapper>
        <h4>Page One</h4>
      </Wrapper>
    </>
  );
}

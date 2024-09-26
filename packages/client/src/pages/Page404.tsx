import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";
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

export default function Page404() {
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found | Broadcom</title>
      </Helmet>

      <Wrapper>
        <p>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </p>

        <RouterLink to="/">Go to Home</RouterLink>
      </Wrapper>
    </>
  );
}

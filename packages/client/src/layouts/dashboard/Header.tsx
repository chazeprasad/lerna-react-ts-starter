import styled from "@emotion/styled";
import React from "react";
import { HEADER } from "../../config-global";
import { css } from "@emotion/react";

const Wrapper = styled.div<any>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex: none;
  flex-grow: 0;
  align-self: stretch;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;

  height: ${HEADER.H_MAIN_DESKTOP}px;

  ${(props) => {
    if (props.isOffset) {
      return css`
        height: ${HEADER.H_MAIN_DESKTOP - 16}px;
      `;
    }
    return null;
  }}
`;

// ----------------------------------------------------------------------

type Props = {
  isOffset: boolean;
};

export default function Header({ isOffset }: Props) {
  return (
    <Wrapper>
      <h4>Header</h4>
    </Wrapper>
  );
}

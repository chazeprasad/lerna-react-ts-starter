import styled from "@emotion/styled";

// ----------------------------------------------------------------------

export const StyledRoot = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StyledSection = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledContent = styled.div`
  width: 480px;
  margin: auto;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  padding: 16px;
`;

import React from "react";
import { StyledRoot, StyledSection, StyledContent } from "./styles";

// ----------------------------------------------------------------------

type Props = {
  title?: string;
  illustration?: string;
  children: React.ReactNode;
};

export default function LoginLayout({ children, title }: Props) {
  return (
    <StyledRoot>
      <StyledSection>
        <h4>{title || "Hi, Welcome back"}</h4>
      </StyledSection>

      <StyledContent>
        <div> {children} </div>
      </StyledContent>
    </StyledRoot>
  );
}

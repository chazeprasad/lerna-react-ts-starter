import styled from "@emotion/styled";
import { useAuthContext } from "./useAuthContext";
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

// ----------------------------------------------------------------------

type RoleBasedGuardProp = {
  hasContent?: boolean;
  roles?: string[];
  children: React.ReactNode;
};

export default function RoleBasedGuard({
  hasContent,
  roles,
  children,
}: RoleBasedGuardProp) {
  const { user } = useAuthContext();

  const currentRole = user?.role; // admin;

  if (typeof roles !== "undefined" && !roles.includes(currentRole)) {
    return hasContent ? (
      <Wrapper>
        <div>
          <h3>Permission Denied</h3>
        </div>

        <div>
          <h4>You do not have permission to access this page</h4>
        </div>
      </Wrapper>
    ) : null;
  }

  return <> {children} </>;
}

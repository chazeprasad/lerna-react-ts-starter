import { Helmet } from "react-helmet-async";

import Login from "../sections/auth/Login";
import React from "react";

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Login | Broadcom</title>
      </Helmet>

      <Login />
    </>
  );
}

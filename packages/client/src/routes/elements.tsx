import { Suspense, lazy, ElementType } from "react";
import LoadingScreen from "../components/loading-screen";
import React from "react";

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

export const LoginPage = Loadable(lazy(() => import("../pages/LoginPage")));

export const PageOne = Loadable(lazy(() => import("../pages/PageOne")));
export const PageTwo = Loadable(lazy(() => import("../pages/PageTwo")));
export const PageThree = Loadable(lazy(() => import("../pages/PageThree")));

export const Page404 = Loadable(lazy(() => import("../pages/Page404")));

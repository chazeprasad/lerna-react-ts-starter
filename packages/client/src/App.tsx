import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import { AuthProvider } from "./auth/JwtContext";
import { persistor, store } from "./redux/store";
import Router from "./routes";
import { GlobalStyle } from "./GlobalStyle";

export default function App() {
  return (
    <AuthProvider>
      <HelmetProvider>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <GlobalStyle />
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </PersistGate>
        </ReduxProvider>
      </HelmetProvider>
    </AuthProvider>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
// dev-he8peygbhod1fskg.us.auth0.com
// UcFCTYXX6c1JbkfEpBqHT2fU95BRgLlq
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Auth0Provider
      domain="dev-he8peygbhod1fskg.us.auth0.com"
      clientId="UcFCTYXX6c1JbkfEpBqHT2fU95BRgLlq"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
);



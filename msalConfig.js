import { PublicClientApplication } from "@azure/msal-browser";

const MSAL_CONFIG = {
  auth: {
    clientId: "62909560-f1df-4b5f-a0b0-765d23bf8580",
    authority:
      "https://login.microsoftonline.com/jmtorsviksmartocean.onmicrosoft.com",
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
};

const LOGIN_REQUEST = {
  scopes: ["openid", "offline_access"],
};

const TOKEN_REQUEST = {
  scopes: [
    // "User.Read",
    // "user_impersonation",
  ],
};

const GRAPH_CONFIG = {
  graphUsersEndpoint: "https://graph.microsoft.com/v1.0/users",
};

const PUBLIC_CLIENT_APPLICATION = new PublicClientApplication(MSAL_CONFIG);
async function initializeMsal() {
  await PUBLIC_CLIENT_APPLICATION.initialize();
}
initializeMsal();

export {
  MSAL_CONFIG,
  LOGIN_REQUEST,
  TOKEN_REQUEST,
  GRAPH_CONFIG,
  PUBLIC_CLIENT_APPLICATION,
};

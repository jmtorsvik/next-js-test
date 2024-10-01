import { PublicClientApplication } from "@azure/msal-browser";

const MSAL_CONFIG = {
  auth: {
    clientId: "85cc0d87-88a3-4a05-837c-29f2a7fe4829",
    authority:
      "https://login.microsoftonline.com/0a1d7995-b734-4d29-8b90-ba9a075bdd6d.onmicrosoft.com",
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
  scopes: ["User.ReadWrite.All"],
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

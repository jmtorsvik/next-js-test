import {
  PUBLIC_CLIENT_APPLICATION,
  LOGIN_REQUEST,
  TOKEN_REQUEST,
} from "../../msalConfig";

const handleSignIn = async (): Promise<string> => {
  const loginResponse = await PUBLIC_CLIENT_APPLICATION.loginPopup(
    LOGIN_REQUEST
  );
  if (loginResponse.account) {
    PUBLIC_CLIENT_APPLICATION.setActiveAccount(loginResponse.account);
  }
  const tokenResponse = await PUBLIC_CLIENT_APPLICATION.acquireTokenSilent(
    TOKEN_REQUEST
  );
  return tokenResponse.accessToken;
};

const handleSignOut = async () => {
  PUBLIC_CLIENT_APPLICATION.logoutPopup();
};

const handleRefreshToken = async (): Promise<string> => {
  const tokenResponse = await PUBLIC_CLIENT_APPLICATION.acquireTokenSilent(
    TOKEN_REQUEST
  );

  return tokenResponse.accessToken;
};

const getAccountName = (): string | undefined => {
  const account = PUBLIC_CLIENT_APPLICATION.getActiveAccount();

  return account?.name;
};

export { handleSignIn, handleSignOut, handleRefreshToken };

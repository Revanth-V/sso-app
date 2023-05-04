export const environment = {
  production: false,
  azure: {
    issuer: 'https://idsvr4.azurewebsites.net',
    clientId: 'spa',
    scope: 'openid profile email offline_access api',
  },
};

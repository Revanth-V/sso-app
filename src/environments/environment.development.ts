export const environment = {
  production: true,
  keycloak: {
    issuer: 'http://localhost:8080/realms/MySSOApplications',
    redirectUri: 'http://localhost:4200/',
    clientId: 'sso-app',
    scope: 'openid profile email offline_access',
  },
};

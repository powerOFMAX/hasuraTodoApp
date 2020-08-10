export const AUTH_CONFIG = {
  domain: process.env.REACT_APP_DOMAIN || 'l1cache.auth0.com',
  clientId: process.env.REACT_APP_CLIENTID || 'g8VusvQ1M9BpCURVjm6shT9gQePDHyJE',
  callbackUrl: process.env.REACT_APP_CALLBACKURL || 'https://rxdb-hasura-demo.netlify.com/callback'
};

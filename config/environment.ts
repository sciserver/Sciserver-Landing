// Map env variables and set defaults using the || operator in case no env variable is found

let loginPortalUrl = '';
let graphqlUrl = '';
let baseUrl = '';

export const env = {
  GRAPHQL_BASE_URL: graphqlUrl,
  BASE_URL: baseUrl,
  LOGIN_PORTAL_URL: loginPortalUrl
}

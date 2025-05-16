import { createCivicAuthPlugin } from "@civic/auth-web3/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.BASE_PATH || "",
};

const CLIENT_ID = process.env.CIVIC_CLIENT_ID;
if (!CLIENT_ID) throw new Error('CIVIC_CLIENT_ID environment variable is required');

const withCivicAuth = createCivicAuthPlugin({
  clientId: CLIENT_ID,
  loginSuccessUrl: "/profiles",
  oauthServer: "https://auth.civic.com/oauth",
  basePath: process.env.BASE_PATH || "",
});

export default withCivicAuth(nextConfig);

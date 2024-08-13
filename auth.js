import { google } from "googleapis";

import dotenv from "dotenv";

dotenv.config();

// OAuth 2 configuration
export const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);

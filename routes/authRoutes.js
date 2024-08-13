import express from "express";
import { oauth2Client } from "../auth.js";

const authRouter = express.Router();

const scopes = ["https://www.googleapis.com/auth/calendar"];

authRouter.get("/", (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });
  res.redirect(url);
});

authRouter.get("/redirect", async (req, res) => {
  const { tokens } = await oauth2Client.getToken(req.query.code);
  oauth2Client.setCredentials(tokens);
  res.send("Authentication successful! Please return to the console.");
});

export default authRouter;

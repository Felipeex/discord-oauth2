import url from "url";
import fetch from "node-fetch";
import express from "express";
import { Bad, InternalServerError } from "../services/util.js";
import axios from "axios";

const router = express.Router();

/* Generate Token */
router.get("/", (req, res) => {
  res.redirect(process.env.AUTH_DISCORD_REDIRECT);
});

router.get("/callback", async (req, res) => {
  const { code } = req.query;

  const body = new url.URLSearchParams({
    client_id: process.env.AUTH_DISCORD_CLIENT_ID,
    client_secret: process.env.AUTH_DISCORD_SECRET,
    code,
    grant_type: "authorization_code",
    redirect_uri: process.env.AUTH_DISCORD_REDIRECT_URI,
    scope: "identify",
  });

  try {
    const oauthResult = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const oauthData = await oauthResult.json();
    if(!oauthData.access_token)
    return Bad(res, "Token inválido.")

    const tokenGenerateDados = await axios.get('https://discord.com/api/users/@me', {
        headers: {
            authorization: `Bearer ${oauthData.access_token}`,
        },
    })

    return res.json(tokenGenerateDados.data)
  } catch (err) {
    console.log(err);
    InternalServerError(res, err.message);
  }
});

export default router;

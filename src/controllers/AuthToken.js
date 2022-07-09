/* Util */
import { InternalServerError } from "../services/Util.js";

/* imports */
import axios from "axios";
import url from "url";

async function tokenGenerate(req, res, next) {
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
    const authResult = await axios("https://discord.com/api/oauth2/token", {
      method: "POST",
      data: body,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    req.body.token = authResult.data;
    next();
  } catch (err) {
    InternalServerError(res, err.message);
  }
}

export default tokenGenerate;

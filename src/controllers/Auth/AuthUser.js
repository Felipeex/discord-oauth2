import axios from "axios";
import { Bad, InternalServerError } from "../../services/Util.js";

async function getUser(req, res, next) {
  const { token } = req.body;
  if (!token) return Bad(res, "Token inválido.");

  try {
    const getUser = await axios.get("https://discord.com/api/users/@me", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    req.body.user = getUser.data;
    next();
  } catch (err) {
    InternalServerError(res, err.message);
  }
}

export default getUser;
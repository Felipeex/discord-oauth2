import express from "express";
const router = express.Router();

/* controllers */
import getUser from "../controllers/Auth/AuthUser.js";
import tokenGenerate from "../controllers/Auth/AuthToken.js";

/* Generate Token */
router.get("/", (req, res) => {
  res.redirect(process.env.AUTH_DISCORD_REDIRECT);
});

router.get("/callback", tokenGenerate, (req, res) => {
  const { token } = req.body;
  res.json(token);
});

router.post("/user", getUser, (req, res) => {
  const { user } = req.body;
  res.json(user);
});

export default router;
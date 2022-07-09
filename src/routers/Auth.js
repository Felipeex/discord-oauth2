import express from "express";
import tokenGenerate from "../controllers/AuthToken.js";

const router = express.Router();

/* Generate Token */
router.get("/", (req, res) => {
  res.redirect(process.env.AUTH_DISCORD_REDIRECT);
});

router.get("/callback", tokenGenerate, (req, res) => {
  const { token } = req.body
  res.send(token)
});

export default router;
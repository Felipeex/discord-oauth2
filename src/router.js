import express from "express";
import cors from "cors"
const app = express();
import 'dotenv/config'

app.use(cors());

app.use(express.json());

/* routers */
import auth from "./routers/Auth.js";
app.use("/auth", auth);

app.listen(process.env.PORT || 3001, () =>
  console.log("Api rodando com sucesso! 🚀")
);
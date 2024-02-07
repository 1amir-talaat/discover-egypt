import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import router from "./routes/routs.js";

dotenv.config();

const app = express();

app.use(express.json({ limit: "16mb" }));

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(5001, () => console.log("Server running at port 5001"));

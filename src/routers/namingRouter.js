import express from "express";
import { pet, baby, alias } from "../Controllers/namingController";
const videoRouter = express.Router();

videoRouter.get("/pet", pet);
videoRouter.get("/baby", baby);
videoRouter.get("/alias", alias);

export default videoRouter;

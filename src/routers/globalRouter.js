import express from "express";
import { home, join, login } from "../controllers/userController";
import { main } from "../controllers/namingController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/main", main);

export default globalRouter;

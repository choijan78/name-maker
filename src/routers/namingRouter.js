import express from "express";
import { animal, human, alias } from "../Controllers/namingController";
const namingRouter = express.Router();

namingRouter.get("/animal", animal);
namingRouter.get("/human", human);
namingRouter.get("/alias", alias);

export default namingRouter;

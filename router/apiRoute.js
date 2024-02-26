import express from "express";
import { translateTextToFrench } from "../controller/translateText.js";

const router = express.Router();

//Create route for translate English to French
router.route("/translateText").post(translateTextToFrench);

export default router;

import express from "express";
import { deleteFoodById, getAllFoods, getFoodById, postFood } from "../Controller/foodController.js";

const router = express.Router();
router.post("/", postFood);

router.get("/", getAllFoods);
router.get("/:id",getFoodById )
router.delete("/:id",deleteFoodById )

export default router;

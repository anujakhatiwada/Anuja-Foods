import express from "express";
import { deleteUserById, getAllUsers, getUserById, postUser, updateUser } from "../Controller/userController.js";
import { verifyToken } from "../MiddleWare/verifyToken.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", verifyToken, getUserById);
router.delete("/:id", deleteUserById);
router.put("/:id", updateUser);

export default router;

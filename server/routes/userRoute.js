import express from "express";
import {
  createNewUser,
  updateUser,
  deleteUser,
  singInUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", createNewUser);

router.post("/signIn", singInUser);

router.patch("/updateUser", updateUser);

router.delete("/deleteUser", deleteUser);

export default router;

import express from "express";
import {
  crateNewPost,
  getPosts,
  getPostById,
  deletePostById,
} from "../controllers/postController.js";

const router = express.Router();

router.post("/cratePost", crateNewPost);

router.get("/", getPosts);

router.get("/byId/:id", getPostById);

router.delete("/byId/:id", deletePostById);

export default router;

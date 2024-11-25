import express from "express";
import {
  crateNewComment,
  getAllCommentsByPostId,
  deleteCommentById,
} from "../controllers/commentController.js";

const router = express.Router();

router.post("/:postId", crateNewComment);

router.get("/All/:postId", getAllCommentsByPostId);

router.delete("/delete/:commentsId", deleteCommentById);

export default router;

import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comments" }],
});

export default mongoose.model("Post", postSchema);

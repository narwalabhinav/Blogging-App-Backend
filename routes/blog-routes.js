import express from 'express';
import { addBlog, deleteBlogById, getAllBlogs, getBlogById, getByUser, updateBlog } from '../controllers/blog-controller';

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog )
blogRouter.get("/:id", getBlogById);
blogRouter.delete("/:id", deleteBlogById);
blogRouter.get("/user/:id", getByUser)

export default blogRouter;
import express from "express";
import { validateUser } from "../../middlewares/userValidation";
import { validate } from "../../middlewares/validation";
import { bearerValidation } from "../../middlewares/bearerValidator";
import { postCreationDTO } from "../../modules/post/dto";
import { PostControllerClass } from "../../modules/post/post.controller";

const PostController = new PostControllerClass();

const router = express.Router();

router.post("/create", bearerValidation, validateUser, validate(postCreationDTO), PostController.createPost);

export = router;

import { PostRepository } from "../repositories/post.repository";
import { Post } from "../models/post";
export declare class PostController {
    private postRepo;
    constructor(postRepo: PostRepository);
    findPosts(project_id: number): Promise<Post[]>;
}

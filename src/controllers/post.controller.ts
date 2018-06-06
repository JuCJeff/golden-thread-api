import { repository } from "@loopback/repository";
import { PostRepository } from "../repositories/post.repository";
import { post, get, requestBody, param } from "@loopback/rest";
import { Post } from "../models/post";

export class PostController {

    constructor(
        @repository(PostRepository.name) private postRepo: PostRepository
    ) { }


    @get('/charity/{charity_id}/project/{project_id}/post')
    async findPosts(@param.path.number('project_id') project_id: number): Promise<Post[]> {
        return await this.postRepo.find({ where: { id: project_id } });
    }

}
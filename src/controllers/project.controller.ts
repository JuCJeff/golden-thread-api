import { repository } from "@loopback/repository";
import { ProjectRepository } from "../repositories/project.repository";
import { post, get, requestBody, param } from "@loopback/rest";
import { Project } from "../models/project";

export class ProjectController {

    constructor(
        @repository(ProjectRepository.name) private projectRepo: ProjectRepository
    ) { }


    @get('/charity/{charity_id}/project')
    async findProjects(@param.path.number('charity_id') charity_id: number): Promise<Project[]> {
        //   return await this.projectRepo.find();
        return await this.projectRepo.find({ where: { id: charity_id } });
    }

    @get('/charity/{charity_id}/project/{project_id}')
    async findProjectId(@param.path.number('project_id') project_id: number): Promise<Project> {
        return await this.projectRepo.findById(project_id);
    }

}
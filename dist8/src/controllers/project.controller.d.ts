import { ProjectRepository } from "../repositories/project.repository";
import { Project } from "../models/project";
export declare class ProjectController {
    private projectRepo;
    constructor(projectRepo: ProjectRepository);
    findProjects(charity_id: number): Promise<Project[]>;
    findProjectId(project_id: number): Promise<Project>;
}

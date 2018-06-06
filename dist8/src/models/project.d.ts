import { Entity } from '@loopback/repository';
export declare class Project extends Entity {
    id?: number;
    name: string;
    description: string;
    img: string;
    url: string;
    projectid: string;
    getId(): number | undefined;
}

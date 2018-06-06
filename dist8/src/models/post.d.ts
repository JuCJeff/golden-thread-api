import { Entity } from '@loopback/repository';
export declare class Post extends Entity {
    id?: number;
    title: string;
    img: string;
    content: string;
    getId(): number | undefined;
}

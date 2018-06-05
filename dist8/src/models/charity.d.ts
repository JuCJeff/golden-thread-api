import { Entity } from '@loopback/repository';
export declare class Charity extends Entity {
    id?: number;
    name: string;
    description: string;
    img: string;
    url: string;
    getId(): number | undefined;
}

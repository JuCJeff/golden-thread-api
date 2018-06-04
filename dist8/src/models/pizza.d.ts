import { Entity } from '@loopback/repository';
export declare class Pizza extends Entity {
    id?: number;
    name: string;
    desc: string;
    topping: string;
    getId(): number | undefined;
}

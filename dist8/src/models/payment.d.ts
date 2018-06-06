import { Entity } from '@loopback/repository';
export declare class Payment extends Entity {
    id?: number;
    cardnumber: number;
    expiry: Date;
    bank: string;
    nickname: string;
    getId(): number | undefined;
}

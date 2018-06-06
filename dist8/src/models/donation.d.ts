import { Entity } from '@loopback/repository';
export declare class Donation extends Entity {
    id?: number;
    datefrom: Date;
    amount: number;
    userid: number;
    charityid: number;
    getId(): number | undefined;
}

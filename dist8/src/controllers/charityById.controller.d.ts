import { CharityRepository } from "../repositories/charity.repository";
import { Charity } from "../models/charity";
export declare class CharityByIdController {
    private charityRepo;
    constructor(charityRepo: CharityRepository);
    findCharityById(id: number): Promise<Charity>;
}

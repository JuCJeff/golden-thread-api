import { repository } from "@loopback/repository";
import { CharityRepository } from "../repositories/charity.repository";
import { post, get, requestBody, param } from "@loopback/rest";
import { Charity } from "../models/charity";

export class CharityController {

    constructor(
        @repository(CharityRepository.name) private charityRepo: CharityRepository
    ) { }

    @get('/charity')
    async findCharities(): Promise<Charity[]> {
      return await this.charityRepo.find();
    }
}
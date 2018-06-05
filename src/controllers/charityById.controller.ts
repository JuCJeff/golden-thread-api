import { repository } from "@loopback/repository";
import { CharityRepository } from "../repositories/charity.repository";
import { post, get, requestBody, param } from "@loopback/rest";
import { Charity } from "../models/charity";

export class CharityByIdController {

    constructor(
        @repository(CharityRepository.name) private charityRepo: CharityRepository
    ) { }

    @get('/charity/{id}')
    async findCharityById(@param.path.number('id') id: number): Promise<Charity> {
      return await this.charityRepo.findById(id);
    }
}
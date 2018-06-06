import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, param } from "@loopback/rest";
import { User } from "../models/user";

export class UserController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) {}

  @get('/users')
  async getAllUsers(): Promise<Array<User>> {
    return await this.userRepo.find();
  }

  @get('/users/{id}')
  async findUserById(@param.path.number('id') id: number): Promise<User> {
    return await this.userRepo.findById(id);
  }

  @get('users/{id}/donations')
  async getDonationByUserId(
    @param.path.number("id") userId: number,
    @param.query.date("datefrom") dateFrom: Date
  ) {
    console.log(userId);
    console.log(dateFrom);
  }

}
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody } from "@loopback/rest";
import { User } from "../models/user";

export class LoginController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) {}

  @post('/login')
  async login(@requestBody() login: any) {
    var users = await this.userRepo.find();
    var username = login.username;
    var pword = login.password;

    for(var i = 0; i < users.length; i++) {
        var user = users[i];
        if(user.username == username && user.password == pword) {
            return user;
        }
    }

    return "Error";
  }
}
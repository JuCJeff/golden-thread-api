import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class LoginController {
    private userRepo;
    constructor(userRepo: UserRepository);
    login(login: any): Promise<User | "Error">;
    findUserById(id: number): Promise<User>;
}

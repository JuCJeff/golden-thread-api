import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class UserController {
    private userRepo;
    constructor(userRepo: UserRepository);
    getAllUsers(): Promise<Array<User>>;
    findUserById(id: number): Promise<User>;
    getDonationByUserId(userId: number, dateFrom: Date): Promise<void>;
}

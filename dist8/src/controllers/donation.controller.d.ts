import { DonationRepository } from "../repositories/donation.repository";
import { Donation } from "../models/donation";
export declare class DonationController {
    private donationRepo;
    constructor(donationRepo: DonationRepository);
    payment(donation: any): Promise<Donation | "Unfortunately, this donation is not on our record.">;
}

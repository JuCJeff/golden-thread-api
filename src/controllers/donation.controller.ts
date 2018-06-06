import { repository } from "@loopback/repository";
import { DonationRepository } from "../repositories/donation.repository";
import { post, get, requestBody, param } from "@loopback/rest";
import { Donation } from "../models/donation";

export class DonationController {
    constructor(
        @repository(DonationRepository.name) private donationRepo: DonationRepository
    ) { }

    @post('/donation')
    async payment(@requestBody() donation: any) {
        var donations = await this.donationRepo.find();
        var idnumber = donation.id;

        for (var i = 0; i < donations.length; i++) {
            var donationInstance = donations[i];
            if (donationInstance.id == idnumber) {
                return donationInstance;
            }
        }
        return "Unfortunately, this donation is not on our record.";
    }

}


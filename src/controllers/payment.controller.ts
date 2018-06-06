import { repository } from "@loopback/repository";
import { PaymentRepository } from "../repositories/payment.repository";
import { post, get, requestBody, param } from "@loopback/rest";
import { Payment } from "../models/payment";

export class PaymentController {

    constructor(
        @repository(PaymentRepository.name) private paymentRepo: PaymentRepository
    ) { }

    @post('/payment')
    async payment(@requestBody() payment: any) {
        var cards = await this.paymentRepo.find();
        var cardnumber = payment.cardnumber;

        for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
            if (card.cardnumber == payment.cardnumber) {
                return card;
            }
        }
        return "This card may not be in your payment methods.";
    }

    @get('/payment')
    async findPayments(): Promise<Payment[]> {
      return await this.paymentRepo.find();
    }
}
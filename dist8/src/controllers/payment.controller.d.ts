import { PaymentRepository } from "../repositories/payment.repository";
import { Payment } from "../models/payment";
export declare class PaymentController {
    private paymentRepo;
    constructor(paymentRepo: PaymentRepository);
    payment(payment: any): Promise<Payment | "This card may not be in your payment methods.">;
    findPayments(): Promise<Payment[]>;
}

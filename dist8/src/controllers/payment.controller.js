"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const payment_repository_1 = require("../repositories/payment.repository");
const rest_1 = require("@loopback/rest");
let PaymentController = class PaymentController {
    constructor(paymentRepo) {
        this.paymentRepo = paymentRepo;
    }
    async payment(payment) {
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
    async findPayments() {
        return await this.paymentRepo.find();
    }
};
__decorate([
    rest_1.post('/payment'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "payment", null);
__decorate([
    rest_1.get('/payment'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "findPayments", null);
PaymentController = __decorate([
    __param(0, repository_1.repository(payment_repository_1.PaymentRepository.name)),
    __metadata("design:paramtypes", [payment_repository_1.PaymentRepository])
], PaymentController);
exports.PaymentController = PaymentController;
//# sourceMappingURL=payment.controller.js.map
import {Entity, property, model} from '@loopback/repository';

@model({
    name:"payment"
})
export class Payment extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'number',
        required: true
    })
    cardnumber: number;

    @property({
        type: 'Date',
    })
    expiry: Date;

    @property({
        type: 'string',
    })
    bank: string;

    @property({
        type: 'string',
    })
    nickname: string;

    getId() {
        return this.id;
    }
}
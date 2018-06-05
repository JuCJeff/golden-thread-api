import {Entity, property, model} from '@loopback/repository';

@model({
    name:"charity"
})
export class Charity extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true
    })
    name: string;

    @property({
        type: 'string',
    })
    description: string;

    @property({
        type: 'string',
    })
    img: string;

    @property({
        type: 'string',
    })
    url: string;


    getId() {
        return this.id;
    }
}
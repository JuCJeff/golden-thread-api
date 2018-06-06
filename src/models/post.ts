import {Entity, property, model} from '@loopback/repository';

@model({
    name:"post"
})
export class Post extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true
    })
    title: string;

    @property({
        type: 'string'
    })
    img: string;

    @property({
        type: 'string',
        required: true
    })
    content: string;

    getId() {
        return this.id;
    }
}
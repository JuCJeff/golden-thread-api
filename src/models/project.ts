import {Entity, property, model} from '@loopback/repository';

@model({
    name:"project"
})
export class Project extends Entity {

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

    //Foreign key for project id
    @property({
        type: 'string',
        required: true
    })
    projectid: string;


    getId() {
        return this.id;
    }
}
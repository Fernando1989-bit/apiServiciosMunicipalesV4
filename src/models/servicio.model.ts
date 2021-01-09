import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Servicio extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idServicio?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombreServicio: string;

  @property({
    type: 'number',
    required: true,
  })
  montoServicio: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Servicio>) {
    super(data);
  }
}

export interface ServicioRelations {
  // describe navigational properties here
}

export type ServicioWithRelations = Servicio & ServicioRelations;

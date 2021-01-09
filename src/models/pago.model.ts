import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Pago extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idPago?: number;

  @property({
    type: 'string',
    required: true,
  })
  fechaPago: string;

  @property({
    type: 'number',
    required: true,
  })
  usuarioId: number;

  @property({
    type: 'number',
    required: true,
  })
  servicioPago: number;

  @property({
    type: 'number',
    required: true,
  })
  montoPago: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Pago>) {
    super(data);
  }
}

export interface PagoRelations {
  // describe navigational properties here
}

export type PagoWithRelations = Pago & PagoRelations;

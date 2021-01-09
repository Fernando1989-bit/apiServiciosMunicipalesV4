import {DefaultCrudRepository} from '@loopback/repository';
import {Servicio, ServicioRelations} from '../models';
import {DbLocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ServicioRepository extends DefaultCrudRepository<
  Servicio,
  typeof Servicio.prototype.idServicio,
  ServicioRelations
> {
  constructor(
    @inject('datasources.DBLocal') dataSource: DbLocalDataSource,
  ) {
    super(Servicio, dataSource);
  }
}

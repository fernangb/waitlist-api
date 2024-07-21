import { ReservationEntity } from 'src/modules/reservations/domain/entities/reservation.entity';
import { TypeormReservationModel } from '../models/typeorm-reservation.model';
import { ReservationStatusEnum } from 'src/modules/reservations/domain/enums/reservation-status.enum';

export class TypeormReservationMapper {
  static toEntity(model: TypeormReservationModel): ReservationEntity | null {
    if (!model) return null;

    return new ReservationEntity({
      id: model.id,
      restaurant: model.restaurant,
      name: model.name,
      phone: model.phone,
      tableSize: model.tableSize,
      status: model.status as ReservationStatusEnum,
      createDate: model.createDate,
      updateDate: model.updateDate,
      endDate: model.endDate,
    });
  }

  static toModel(entity: ReservationEntity): TypeormReservationModel | null {
    if (!entity) return null;

    return {
      id: entity.id,
      restaurant: entity.restaurant,
      restaurantId: entity.restaurant.id,
      name: entity.name,
      phone: entity.phone,
      tableSize: entity.tableSize,
      status: entity.status,
      createDate: entity.createDate,
      updateDate: entity.updateDate,
      endDate: entity.endDate,
    } as TypeormReservationModel;
  }
}

import { ReservationStatusEnum } from '../enums/reservation-status.enum';
import { Phone } from 'src/shared/domain/value-objects/phone.vo';
import { RestaurantEntity } from 'src/modules/restaurants/domain/entities/restaurant.entity';
import {
  BaseEntity,
  BaseEntityProps,
} from 'src/shared/domain/entities/base.entitiy';

interface ReservationEntityProps extends BaseEntityProps {
  restaurant: RestaurantEntity;
  name: string;
  phone: string;
  tableSize: number;
  status?: ReservationStatusEnum;
  endDate?: Date;
}
export class ReservationEntity extends BaseEntity {
  restaurant: RestaurantEntity;
  name: string;
  phone: string;
  tableSize: number;
  status: ReservationStatusEnum;
  endDate?: Date;

  constructor(props: ReservationEntityProps) {
    super({
      id: props.id,
      createDate: props.createDate,
      updateDate: props.updateDate,
    });
    this.restaurant = props.restaurant;
    this.name = props.name;
    this.phone = new Phone(props.phone).value;
    this.tableSize = props.tableSize;
    this.status = !props.status
      ? ReservationStatusEnum.REGISTERED
      : props.status;
    this.endDate = props.endDate;
  }
}

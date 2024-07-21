import { ReservationEntity } from '../entities/reservation.entity';

export interface ReservationRepositoryInterface {
  create(reservation: ReservationEntity): Promise<void>;
}

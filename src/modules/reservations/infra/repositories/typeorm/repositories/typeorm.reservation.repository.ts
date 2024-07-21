import { InjectRepository } from '@nestjs/typeorm';
import { ReservationRepositoryInterface } from 'src/modules/reservations/domain/repositories/reservation.repository.interface';
import { Repository } from 'typeorm';
import { TypeormReservationModel } from '../models/typeorm-reservation.model';
import { ReservationEntity } from 'src/modules/reservations/domain/entities/reservation.entity';
import { TypeormReservationMapper } from '../mappers/typeorm-reservation-mapper';

export class TypeormReservationRepository
  implements ReservationRepositoryInterface
{
  constructor(
    @InjectRepository(TypeormReservationModel)
    private repository: Repository<TypeormReservationModel>,
  ) {}

  async create(entity: ReservationEntity): Promise<void> {
    const model = TypeormReservationMapper.toModel(entity);

    await this.repository.save(this.repository.create(model));
  }
}

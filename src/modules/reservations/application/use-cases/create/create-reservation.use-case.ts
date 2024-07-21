import { Inject, Injectable } from '@nestjs/common';
import { UseCaseInterface } from 'src/shared/domain/use-cases/use-case.interface';
import {
  CreateReservationInputDto,
  CreateReservationOutputDto,
} from './dtos/create-reservation.dto';
import { ReservationEntity } from 'src/modules/reservations/domain/entities/reservation.entity';
import { ReservationRepositoryInterface } from 'src/modules/reservations/domain/repositories/reservation.repository.interface';
import { RestaurantService } from 'src/modules/restaurants/application/services/restaurant.service';
import { KafkaService } from 'src/shared/infra/providers/kafka/kafka.service';
import { RESERVATION_REPOSITORY } from '../../consts/reservation.const';

@Injectable()
export class CreateReservationUseCase
  implements
    UseCaseInterface<CreateReservationInputDto, CreateReservationOutputDto>
{
  constructor(
    @Inject(RESERVATION_REPOSITORY)
    private repository: ReservationRepositoryInterface,
    private restaurantService: RestaurantService,
    private kafkaService: KafkaService,
  ) {}

  async execute(
    props: CreateReservationInputDto,
  ): Promise<CreateReservationOutputDto> {
    const restaurant = await this.restaurantService.findById(
      props.restaurantId,
    );

    if (!restaurant) throw new Error('Restaurant does not exists');

    const reservation = new ReservationEntity({
      restaurant,
      name: props.name,
      phone: props.phone,
      tableSize: props.tableSize,
    });

    await this.repository.create(reservation);

    await this.kafkaService.sendMessage(
      process.env.KAFKA_DEFAULT_TOPIC,
      reservation,
      restaurant.id,
    );
  }
}

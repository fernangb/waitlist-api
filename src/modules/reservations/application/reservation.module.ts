import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RESERVATION_REPOSITORY } from './consts/reservation.const';
import { TypeormReservationModel } from '../infra/repositories/typeorm/models/typeorm-reservation.model';
import { TypeormReservationRepository } from '../infra/repositories/typeorm/repositoies/typeorm.reservation.repository';
import { CreateReservationUseCase } from './use-cases/create/create-reservation.use-case';
import { RestaurantModule } from 'src/modules/restaurants/application/restaurant.module';
import { KafkaModule } from 'src/shared/infra/providers/kafka/kafka.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TypeormReservationModel]),
    RestaurantModule,
    KafkaModule,
  ],
  controllers: [],
  providers: [
    {
      provide: RESERVATION_REPOSITORY,
      useClass: TypeormReservationRepository,
    },
    CreateReservationUseCase,
  ],
  exports: [],
})
export class ReservationModule {}

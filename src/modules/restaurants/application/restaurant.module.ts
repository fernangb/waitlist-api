import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormRestaurantModel } from '../infra/repositories/typeorm/models/typeorm.restaurant.model';
import { RestaurantService } from './services/restaurant.service';
import { TypeormRestaurantRepository } from '../infra/repositories/typeorm/repositories/typeorm.restaurant.repository';
import { RESTAURANT_REPOSITORY } from './consts/restaurant.const';
import { RestaurantController } from './controllers/restaurant.controller';
import { CreateRestaurantUseCase } from './use-cases/create/create-restaurant.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([TypeormRestaurantModel])],
  controllers: [RestaurantController],
  providers: [
    RestaurantService,
    {
      provide: RESTAURANT_REPOSITORY,
      useClass: TypeormRestaurantRepository,
    },
    CreateRestaurantUseCase,
  ],
  exports: [RestaurantService],
})
export class RestaurantModule {}

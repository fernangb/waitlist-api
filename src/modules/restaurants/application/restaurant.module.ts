import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormRestaurantModel } from '../infra/repositories/typeorm/models/typeorm.restaurant.model';
import { RestaurantService } from './services/restaurant.service';
import { TypeormRestaurantRepository } from '../infra/repositories/typeorm/repositories/typeorm.restaurant.repository';
import { RESTAURANT_REPOSITORY } from './consts/restaurant.const';

@Module({
  imports: [TypeOrmModule.forFeature([TypeormRestaurantModel])],
  controllers: [],
  providers: [
    RestaurantService,
    {
      provide: RESTAURANT_REPOSITORY,
      useClass: TypeormRestaurantRepository,
    },
  ],
  exports: [RestaurantService],
})
export class RestaurantModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';
import { RestaurantModule } from './modules/restaurants/application/restaurant.module';
import { ReservationModule } from './modules/reservations/application/reservation.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    RestaurantModule,
    ReservationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

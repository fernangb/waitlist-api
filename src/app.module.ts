import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './shared/infra/database/database.module';
import { RestaurantModule } from './modules/restaurants/application/restaurant.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    RestaurantModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

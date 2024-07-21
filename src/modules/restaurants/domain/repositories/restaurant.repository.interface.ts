import { RestaurantEntity } from '../entities/restaurant.entity';

export interface RestaurantRepositoryInterface {
  create(restaurant: RestaurantEntity): Promise<void>;
  findById(id: string): Promise<RestaurantEntity>;
}

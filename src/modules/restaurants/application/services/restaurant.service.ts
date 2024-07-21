import { Inject, Injectable } from '@nestjs/common';
import { RestaurantRepositoryInterface } from '../../domain/repositories/restaurant.repository.interface';
import { RestaurantEntity } from '../../domain/entities/restaurant.entity';
import { RESTAURANT_REPOSITORY } from '../consts/restaurant.const';

@Injectable()
export class RestaurantService {
  constructor(
    @Inject(RESTAURANT_REPOSITORY)
    private readonly repository: RestaurantRepositoryInterface,
  ) {}

  async findById(id: string): Promise<RestaurantEntity> {
    return this.repository.findById(id);
  }
}

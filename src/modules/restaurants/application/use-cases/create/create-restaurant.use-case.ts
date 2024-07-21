import { Inject, Injectable } from '@nestjs/common';
import { UseCaseInterface } from 'src/shared/domain/use-cases/use-case.interface';
import { RestaurantEntity } from 'src/modules/restaurants/domain/entities/restaurant.entity';
import { RestaurantRepositoryInterface } from 'src/modules/restaurants/domain/repositories/restaurant.repository.interface';
import { RESTAURANT_REPOSITORY } from 'src/modules/restaurants/application/consts/restaurant.const';
import {
  CreateRestaurantInputDto,
  CreateRestaurantOutputDto,
} from 'src/modules/restaurants/application/use-cases/create/dtos/create-restaurant.dto';

@Injectable()
export class CreateRestaurantUseCase
  implements
    UseCaseInterface<CreateRestaurantInputDto, CreateRestaurantOutputDto>
{
  constructor(
    @Inject(RESTAURANT_REPOSITORY)
    private repository: RestaurantRepositoryInterface,
  ) {}

  async execute(
    props: CreateRestaurantInputDto,
  ): Promise<CreateRestaurantOutputDto> {
    const restaurant = new RestaurantEntity({
      name: props.name,
    });

    await this.repository.create(restaurant);
  }
}

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeormRestaurantMapper } from '../mappers/typeorm.restaurant.mapper';
import { TypeormRestaurantModel } from '../models/typeorm.restaurant.model';
import { RestaurantEntity } from '../../../../domain/entities/restaurant.entity';
import { RestaurantRepositoryInterface } from '../../../../domain/repositories/restaurant.repository.interface';

export class TypeormRestaurantRepository
  implements RestaurantRepositoryInterface
{
  constructor(
    @InjectRepository(TypeormRestaurantModel)
    private repository: Repository<TypeormRestaurantModel>,
  ) {}

  async create(entity: RestaurantEntity): Promise<void> {
    const model = TypeormRestaurantMapper.toModel(entity);

    await this.repository.save(this.repository.create(model));
  }

  async findById(id: string): Promise<RestaurantEntity> {
    const model = await this.repository.findOne({ where: { id } });

    return TypeormRestaurantMapper.toEntity(model);
  }
}

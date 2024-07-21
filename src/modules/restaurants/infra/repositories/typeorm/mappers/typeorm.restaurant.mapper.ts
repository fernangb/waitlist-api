import { RestaurantEntity } from 'src/modules/Restaurants/domain/entities/Restaurant.entity';
import { TypeormRestaurantModel } from '../models/typeorm.restaurant.model';

export class TypeormRestaurantMapper {
  static toEntity(model: TypeormRestaurantModel): RestaurantEntity | null {
    if (!model) return null;

    return new RestaurantEntity({
      id: model.id,
      name: model.name,
      createDate: model.createDate,
      updateDate: model.updateDate,
    });
  }

  static toModel(entity: RestaurantEntity): TypeormRestaurantModel | null {
    if (!entity) return null;

    return {
      id: entity.id,
      name: entity.name,
      createDate: entity.createDate,
      updateDate: entity.updateDate,
    } as TypeormRestaurantModel;
  }
}

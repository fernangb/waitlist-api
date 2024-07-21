import {
  BaseEntity,
  BaseEntityProps,
} from 'src/shared/domain/entities/base.entitiy';

interface RestaurantEntityProps extends BaseEntityProps {
  name: string;
}
export class RestaurantEntity extends BaseEntity {
  name: string;

  constructor(props: RestaurantEntityProps) {
    super({
      id: props.id,
      createDate: props.createDate,
      updateDate: props.updateDate,
    });
    this.name = props.name;
  }
}

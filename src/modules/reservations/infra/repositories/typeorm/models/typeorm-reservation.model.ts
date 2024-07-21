import { TypeormRestaurantModel } from 'src/modules/restaurants/infra/repositories/typeorm/models/typeorm.restaurant.model';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'reservations' })
export class TypeormReservationModel {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ name: 'restaurant_id', type: 'uuid' })
  restaurantId: string;

  @ManyToOne(() => TypeormRestaurantModel, (model) => model.id, {
    eager: true,
  })
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: TypeormRestaurantModel;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column({ name: 'table_size' })
  tableSize: number;

  @Column()
  status: string;

  @CreateDateColumn({ name: 'create_date' })
  createDate: Date;

  @UpdateDateColumn({ name: 'update_date' })
  updateDate: Date;

  @Column({ name: 'end_date' })
  endDate: Date;
}

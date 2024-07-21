import { UUID } from '../value-objects/uuid.vo';

export interface BaseEntityProps {
  id?: string;
  createDate?: Date;
  updateDate?: Date;
}

export class BaseEntity {
  id: string;
  createDate: Date;
  updateDate: Date;

  constructor(props: BaseEntityProps) {
    this.id = props.id ? props.id : new UUID(props.id).getValue();
    this.createDate = props.createDate || new Date();
    this.updateDate = props.updateDate || this.createDate;
  }
}

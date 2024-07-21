import { BadRequestException } from '@nestjs/common';
import { v4 as uuidv4, validate as uuidValidate } from 'uuid';

export class UUID {
  private value: string;

  constructor(value?: string) {
    this.value = value ? value : uuidv4();

    this.validate();
  }

  getValue() {
    return this.value;
  }

  private validate() {
    const isValidUUID = uuidValidate(this.value);

    if (!isValidUUID) throw new BadRequestException('Invalid UUID');
  }
}

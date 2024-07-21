import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRestaurantInputDto {
  @ApiProperty({ description: 'Restaurant name', example: 'Fake restaurant' })
  @IsString()
  name: string;
}

export type CreateRestaurantOutputDto = void;

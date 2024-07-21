import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateReservationInputDto {
  @ApiProperty({ description: 'Restaurant id', example: '1' })
  @IsString()
  restaurantId: string;

  @ApiProperty({ description: 'Customer name', example: 'Fulano' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Customer phone', example: '21999999999' })
  @IsString()
  phone: string;

  @ApiProperty({ description: 'Reservation table size', example: 3 })
  @IsNumber()
  tableSize: number;
}

export type CreateReservationOutputDto = void;

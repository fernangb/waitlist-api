import { Controller, Post, Body } from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateReservationUseCase } from '../use-cases/create/create-reservation.use-case';
import { CreateReservationInputDto } from '../use-cases/create/dtos/create-reservation.dto';
@Controller('reservations')
@ApiTags('Reservation')
export class ReservationController {
  constructor(
    private readonly createReservationUseCase: CreateReservationUseCase,
  ) {}

  @ApiOperation({ summary: 'Create a reservation' })
  @ApiResponse({
    status: 201,
    description: 'Created reservation',
  })
  @Post()
  async create(@Body() dto: CreateReservationInputDto): Promise<void> {
    return this.createReservationUseCase.execute(dto);
  }
}

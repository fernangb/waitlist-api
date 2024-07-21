import { Controller, Post, Body } from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRestaurantUseCase } from '../use-cases/create/create-restaurant.use-case';
import { CreateRestaurantInputDto } from '../use-cases/create/dtos/create-restaurant.dto';
@Controller('restaurants')
@ApiTags('Restaurant')
export class RestaurantController {
  constructor(
    private readonly createRestaurantUseCase: CreateRestaurantUseCase,
  ) {}

  @ApiOperation({ summary: 'Create a restaurant' })
  @ApiResponse({
    status: 201,
    description: 'Created restaurant',
  })
  @Post()
  async create(@Body() dto: CreateRestaurantInputDto): Promise<void> {
    return this.createRestaurantUseCase.execute(dto);
  }
}

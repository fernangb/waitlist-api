export type CreateReservationInputDto = {
  restaurantId: string;
  name: string;
  phone: string;
  tableSize: number;
};

export type CreateReservationOutputDto = void;

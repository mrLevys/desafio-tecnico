export interface Trip {
  id: number;
  routeId: number;

  origin: string;
  destination: string;

  departureDate: string;
  departureTime: string;

  price: number;

  availableSeats: number;

  occupiedSeats: number[];
}
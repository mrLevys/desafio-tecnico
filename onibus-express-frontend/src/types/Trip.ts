export interface Trip {
  id: number;
  routeId: number;
  departureDate: string;
  departureTime: string;
  price: number;
  availableSeats: number;
  occupiedSeats: number[];
}
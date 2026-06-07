export interface Reservation {
  id?: number;
  code: string;
  tripId: number;
  seatNumber: number;

  passenger: {
    name: string;
    cpf: string;
    email: string;
  };

  status: "CONFIRMED" | "CANCELLED";
}
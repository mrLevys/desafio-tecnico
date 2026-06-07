import {
  createContext,
  useState,
  type ReactNode,
} from "react";

import type { Trip } from "../types/Trip";
import type { Passenger } from "../types/Passenger";
import type { Reservation } from "../types/Reservation";

interface BookingContextData {
  selectedTrip: Trip | null;
  selectedSeat: number | null;
  passenger: Passenger | null;
  reservation: Reservation | null;

  setSelectedTrip: (
    trip: Trip | null
  ) => void;

  setSelectedSeat: (
    seat: number | null
  ) => void;

  setPassenger: (
    passenger: Passenger | null
  ) => void;

  setReservation: (
    reservation: Reservation | null
  ) => void;
}

const BookingContext =
  createContext<BookingContextData>(
    {} as BookingContextData
  );

interface BookingProviderProps {
  children: ReactNode;
}

export function BookingProvider({
  children,
}: BookingProviderProps) {
  const [selectedTrip, setSelectedTrip] =
    useState<Trip | null>(null);

  const [selectedSeat, setSelectedSeat] =
    useState<number | null>(null);

  const [passenger, setPassenger] =
    useState<Passenger | null>(null);

  const [reservation, setReservation] =
    useState<Reservation | null>(null);

  return (
    <BookingContext.Provider
      value={{
        selectedTrip,
        selectedSeat,
        passenger,
        reservation,

        setSelectedTrip,
        setSelectedSeat,
        setPassenger,
        setReservation,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export default BookingContext;
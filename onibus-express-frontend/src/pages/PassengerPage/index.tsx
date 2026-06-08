import { useNavigate } from "react-router-dom";

import { PassengerForm } from "../../components/PassengerForm";

import { useBooking } from "../../hooks/useBooking";

import { reservationsService } from "../../services/reservationService";
import type { Passenger } from "../../types/Passenger";

export function PassengerPage() {
  const navigate = useNavigate();

  const {
    selectedTrip,
    selectedSeat,
    setReservation,
    setPassenger,
  } = useBooking();

  const handleSubmit =
    async (passenger: Passenger) => {
      if (
        !selectedTrip ||
        !selectedSeat
      ) {
        return;
      }

      setPassenger(passenger);

      const code =
        Math.random()
          .toString(36)
          .substring(2, 5)
          .toUpperCase() +
        "-" +
        Math.floor(
          Math.random() * 100000
        );

      const reservation =
        await reservationsService.create({
          code,
          tripId: selectedTrip.id,
          seatNumber: selectedSeat,
          status: "CONFIRMED",
          passenger,
        });

      setReservation(
        reservation
      );

      navigate("/sucesso");
    };

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-6 text-2xl font-bold">
        Dados do Passageiro
      </h1>

      <PassengerForm
        onSubmit={
          handleSubmit
        }
      />
    </div>
  );
}
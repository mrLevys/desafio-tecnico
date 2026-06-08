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

      const reservation =
        await reservationsService.create({
          tripId: selectedTrip.id,
          seatNumber:
            selectedSeat,
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
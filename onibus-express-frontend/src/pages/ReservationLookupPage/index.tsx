import { useState } from "react";
import { reservationsService } from "../../services/reservationService";
import type { Reservation } from "../../types/Reservation";



export function ReservationLookupPage() {
  const [code, setCode] =
    useState("");

  const [reservation,
    setReservation] =
    useState<Reservation>();

  const handleSearch =
    async () => {
      const data =
        await reservationsService.getByCode(
          code
        );

      setReservation(data);
    };

  const handleCancel =
    async () => {
      await reservationsService.cancel(
        reservation?.id
      );

      handleSearch();
    };

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-4 text-2xl font-bold">
        Consultar Reserva
      </h1>

      <input
        value={code}
        onChange={(e) =>
          setCode(
            e.target.value
          )
        }
        placeholder="Código"
        className="rounded border p-3"
      />

      <button
        onClick={handleSearch}
        className="ml-2 rounded bg-blue-600 px-4 py-2 text-white"
      >
        Buscar
      </button>

      {reservation && (
        <div className="mt-6 rounded border p-4">
          <p>
            Código:
            {" "}
            {reservation.code}
          </p>

          <p>
            Passageiro:
            {" "}
            {reservation.passenger.name}
          </p>

          <p>
            Status:
            {" "}
            {reservation.status}
          </p>

          <button
            onClick={
              handleCancel
            }
            className="mt-4 rounded bg-red-600 px-4 py-2 text-white"
          >
            Cancelar
          </button>
        </div>
      )}
    </div>
  );
}
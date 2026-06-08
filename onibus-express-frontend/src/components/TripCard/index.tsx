import type { Trip } from "../../types/Trip";

interface TripCardProps {
  trip: Trip;
  onSelect: (trip: Trip) => void;
}

export function TripCard({
  trip,
  onSelect,
}: TripCardProps) {
  return (
    <div className="rounded-lg bg-white p-4 shadow">
      <h2 className="font-semibold text-lg">
        {trip.origin} → {trip.destination}
      </h2>

      <p>Data: {trip.departureDate}</p>

      <p>Horário: {trip.departureTime}</p>

      <p>
        Preço:
        {" "}
        {new Intl.NumberFormat(
          "pt-BR",
          {
            style: "currency",
            currency: "BRL",
          }
        ).format(trip.price)}
      </p>

      <p>
        Vagas:
        {" "}
        {trip.availableSeats -
          trip.occupiedSeats.length}
      </p>

      <button
        onClick={() => onSelect(trip)}
        className="mt-3 rounded bg-green-600 px-3 py-2 text-white"
      >
        Selecionar
      </button>
    </div>
  );
}
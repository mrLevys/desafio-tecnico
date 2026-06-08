import { useNavigate } from "react-router-dom";

import { SeatMap } from "../../components/SeatMap";

import { useBooking } from "../../hooks/useBooking";

export function SeatSelectionPage() {
  const navigate = useNavigate();

  const {
    selectedTrip,
    selectedSeat,
    setSelectedSeat,
  } = useBooking();

  if (!selectedTrip) {
    return (
      <p>
        Nenhuma viagem selecionada.
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-6 text-2xl font-bold">
        Escolha seu assento
      </h1>

      <p>
        {selectedTrip.origin}
        {" → "}
        {selectedTrip.destination}
      </p>

      <p>
        {selectedTrip.departureDate}
      </p>

      <p>
        {selectedTrip.departureTime}
      </p>

      <SeatMap
        occupiedSeats={
          selectedTrip.occupiedSeats
        }
        selectedSeat={selectedSeat}
        onSelectSeat={
          setSelectedSeat
        }
      />

      <button
        disabled={!selectedSeat}
        onClick={() =>
          navigate("/passageiro")
        }
        className="mt-6 rounded bg-blue-600 px-4 py-2 text-white disabled:bg-slate-300"
      >
        Prosseguir
      </button>
    </div>
  );
}
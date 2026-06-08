interface SeatMapProps {
  occupiedSeats: number[];
  selectedSeat: number | null;
  onSelectSeat: (
    seatNumber: number
  ) => void;
}

export function SeatMap({
  occupiedSeats,
  selectedSeat,
  onSelectSeat,
}: SeatMapProps) {
  const seats = Array.from(
    { length: 40 },
    (_, index) => index + 1
  );

  return (
    <div className="grid grid-cols-4 gap-3">
      {seats.map((seat) => {
        const isOccupied =
          occupiedSeats.includes(seat);

        const isSelected =
          selectedSeat === seat;

        return (
          <button
            key={seat}
            disabled={isOccupied}
            onClick={() =>
              onSelectSeat(seat)
            }
            className={`
              h-12 rounded text-sm font-medium
              ${
                isOccupied
                  ? "bg-red-500 text-white"
                  : isSelected
                  ? "bg-blue-500 text-white"
                  : "bg-green-500 text-white"
              }
            `}
          >
            {seat}
          </button>
        );
      })}
    </div>
  );
}
import { useBooking } from "../../hooks/useBooking";

export function SuccessPage() {
  const { reservation } =
    useBooking();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-lg bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-green-600">
          Reserva realizada!
        </h1>

        <p className="mt-4">
          Código:
          {" "}
          {reservation?.code}
        </p>
      </div>
    </div>
  );
}
import { useEffect, useMemo, useState } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import { routesService } from "../../services/routesServices";
import type { Route } from "../../types/Route";

import { tripsService } from "../../services/tripServices";
import type { Trip } from "../../types/Trip";

import { formatCurrency } from "../../utils/currency";

import { useNavigate } from "react-router-dom";
import { useBooking } from "../../hooks/useBooking";

export function SearchPage() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [routes, setRoutes] = useState<Route[]>([]);
  const [loading, setLoading] = useState(false);
  const [trips, setTrips] = useState<Trip[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const isSearchDisabled =  !origin ||  !destination ||  !date;

  const navigate = useNavigate();
  const { setSelectedTrip,} = useBooking();

  const handleSearch = async () => {
    try {
      setLoading(true);

      const result =
        await tripsService.search({
          origin,
          destination,
          date,
        });

      setTrips(result);

      setHasSearched(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadRoutes = async () => {
      try {
        const data = await routesService.getAll();

        setRoutes(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadRoutes();
  }, []);

  const cities = useMemo(() => {
    return [
      ...new Set(
        routes.flatMap((route) => [
          route.origin,
          route.destination,
        ])
      ),
    ];
  }, [routes]);

  const destinationOptions = useMemo(() => {
    return cities.filter(
      (city) => city !== origin
    );
  }, [cities, origin]);
  
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-5xl p-6">
        <h1 className="mb-6 text-3xl font-bold">
          Busca de Passagens
        </h1>

        <div className="rounded-lg bg-white p-6 shadow">
          <div className="grid gap-4 md:grid-cols-3">

            <Autocomplete
              options={cities}
              value={origin}
              onChange={(_, value) => {
                setOrigin(value ?? "");
                setDestination("");
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Origem"
                  fullWidth
                />
              )}
            />

            <Autocomplete
              disabled={!origin}
              options={destinationOptions}
              value={destination}
              onChange={(_, value) =>
                setDestination(value ?? "")
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Destino"
                  fullWidth
                />
              )}
            />

            <input
              type="date"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
              className="rounded border p-3"
            />
          </div>

          <button
            disabled={isSearchDisabled}
            onClick={handleSearch}
            className="
              mt-4
              rounded
              px-4
              py-2
              text-white
              disabled:bg-slate-300
              disabled:cursor-not-allowed
              bg-blue-600
            "
          >
            Buscar
          </button>
        </div>

        <div className="mt-8">
          {loading && (
            <div className="text-center py-6">
              Carregando viagens...
            </div>
          )}

          {!loading &&
            hasSearched &&
            trips.length === 0 && (
              <p className="text-center text-slate-500">
                Nenhuma viagem encontrada.
              </p>
          )}

          {!loading &&
            trips.map((trip) => (
              <div
                key={trip.id}
                className="mb-4 rounded-lg bg-white p-4 shadow"
              >
                <h2 className="font-semibold">
                  {trip.origin} → {trip.destination}
                </h2>

                <p>
                  Horário:
                  {" "}
                  {trip.departureTime}
                </p>

                <p>
                  Preço:
                  {" "}
                  {formatCurrency(trip.price)}
                </p>

                <p>
                  Data: {trip.departureDate}
                </p>

                <p>
                  Vagas:
                  {" "}
                  {trip.availableSeats -  trip.occupiedSeats.length}
                </p>

                <button
                  onClick={() => {
                    setSelectedTrip(trip);

                    navigate("/assentos");
                  }}
                  className="
                    mt-3
                    rounded
                    bg-green-600
                    px-3
                    py-2
                    text-white
                  "
                >
                  Selecionar
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
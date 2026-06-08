import { api } from "../api/client";

export const tripsService = {
  getAll: async () => {
    const response = await api.get("/trips");

    return response.data;
  },

  getById: async (id: number) => {
    const response = await api.get(`/trips/${id}`);

    return response.data;
  },

  search: async (params: {
    origin: string;
    destination: string;
    date: string;
  }) => {
    const { data } = await api.get(
      "/trips",
      {
        params: {
          origin: params.origin,
          destination: params.destination,
          departureDate: params.date,
        },
      }
    );

    return data;
  },

};
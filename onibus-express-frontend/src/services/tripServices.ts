import { api } from "../api/client";

export const tripsService = {
  getAll: async () => {
    const response = await api.get("/trips");

    return response.data;
  },

  getById: async (id: number) => {
    const response = await api.get(`/trips/${id}`);

    return response.data;
  }
};
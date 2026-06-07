import { api } from "../api/client";

export const reservationsService = {
  create: async (payload: unknown) => {
    const response = await api.post(
      "/reservations",
      payload
    );

    return response.data;
  }
};
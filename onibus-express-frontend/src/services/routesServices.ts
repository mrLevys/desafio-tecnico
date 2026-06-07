import { api } from "../api/client";

export const routesService = {
  getAll: async () => {
    const { data } = await api.get("/routes");

    return data;
  },
};
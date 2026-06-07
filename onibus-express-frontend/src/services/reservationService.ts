import { api } from "../api/client";

export const reservationsService = {
  create: async (payload: unknown) => {
    const { data } = await api.post(
      "/reservations",
      payload
    );

    return data;
  },
  
  getByCode: async (code: string) => {
    const { data } = await api.get(
      `/reservations?code=${code}`
    );
    
    return data[0];
  },

  cancel: async (id: number) => {
    const { data } = await api.patch(
      `/reservations/${id}`,
      {
        status: "CANCELLED",
      }
    );

    return data
  }


};
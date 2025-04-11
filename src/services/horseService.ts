import api from "./api";
import { HorseApiResponse } from "../types/Horse";

export const fetchHorses = async (): Promise<HorseApiResponse> => {
  try {
    const response = await api.get("/horses");
    return response.data;
  } catch {
    throw new Error("فشل في تحميل الخيول");
  }
};

export const getHorseDetails = async (id: string) => {
  try {
    const response = await api.get(`/horses/${id}`);
    return response.data;
  } catch {
    throw new Error("فشل في تحميل تفاصيل الحصان");
  }
};
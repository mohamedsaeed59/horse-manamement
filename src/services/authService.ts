import api from "./api";

export const login = async (email: string, password: string): Promise<string> => {
  try {
    const response = await api.post("/login", { email, password });
    return response.data.data.token;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "فشل تسجيل الدخول");
  }
};

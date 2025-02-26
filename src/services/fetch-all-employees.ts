import { api } from "../lib/axios";

export const FetchAllEmployees = async () => {
  const response = await api.get("/");

  if (response.data) {
    return response;
  }

  return false;
};

import { api } from "../lib/axios";

export interface IFetchAllEmployeesResponse {
  id: string;
  image: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
}

export const FetchAllEmployees = async () => {
  const response = await api.get<IFetchAllEmployeesResponse[]>("/employees");

  if (response.data) {
    return response.data;
  }

  return false;
};

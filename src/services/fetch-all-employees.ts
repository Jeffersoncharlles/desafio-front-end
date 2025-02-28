import { api } from "../lib/axios";

export interface IFetchAllEmployeesResponse {
  id: string;
  image: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
}

export const FetchAllEmployees = async (filter: string) => {
  const response = await api.get<IFetchAllEmployeesResponse[]>(
    `/employees?q=${filter}`,
  );

  if (response.data) {
    if (filter) {
      const filteredSearch = response.data.filter(
        (employee) =>
          employee.name.toLowerCase().includes(filter.toLowerCase()) ||
          employee.job.toLowerCase().includes(filter.toLowerCase()) ||
          employee.phone.includes(filter),
      );

      return filteredSearch;
    }

    return response.data;
  }

  return false;
};

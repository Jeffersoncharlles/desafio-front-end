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
  try {
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

        return filteredSearch.length > 0 ? filteredSearch : [];
      }
    }

    return response.data.length > 0 ? response.data : [];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      message: "Ocorreu um erro",
    };
  }
};

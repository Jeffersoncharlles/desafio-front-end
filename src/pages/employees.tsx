import EmployeesTable from "../components/employees-table";
import InputRoot, { InputField, InputIcon } from "../components/ui/input";
import Search from "../assets/search.svg";
import { useEffect, useState } from "react";
import {
  FetchAllEmployees,
  IFetchAllEmployeesResponse,
} from "../services/fetch-all-employees";
import { useDebounce } from "../hooks/useDebounce";

const Employees = () => {
  const [employees, setEmployees] = useState<IFetchAllEmployeesResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("");
  const debouncedSearchTerm = useDebounce(filter, 500);

  const handleSearchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value.toLocaleLowerCase());
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const result = await FetchAllEmployees(debouncedSearchTerm);

      if (!Array.isArray(result) && result.message) {
        setError(result.message);

        setIsLoading(false);
        return;
      }

      if (Array.isArray(result)) {
        setEmployees(result);
      }
      setIsLoading(false);
    })();
  }, [debouncedSearchTerm]);

  return (
    <div className="">
      <div className="mt-5 md:mt-11 flex flex-col md:flex-row justify-between  space-y-5 md:space-y-0 md:items-center">
        <h2 className="text-xl font-medium">Funcionários</h2>
        <InputRoot>
          <InputField
            placeholder="Pesquisar"
            onChange={handleSearchFilter}
            alt="Procure por nome cargo e telefone"
          />
          <InputIcon>
            <img src={Search} className="" />
          </InputIcon>
        </InputRoot>
      </div>
      <EmployeesTable employees={employees} loading={isLoading} error={error} />
    </div>
  );
};
export default Employees;

import EmployeesTable from "../components/employees-table";
import InputRoot, { InputField, InputIcon } from "../components/ui/input";
import Search from "../assets/search.svg";
import { useEffect, useState } from "react";
import {
  FetchAllEmployees,
  IFetchAllEmployeesResponse,
} from "../services/fetch-all-employees";

const Employees = () => {
  const [employees, setEmployees] = useState<
    IFetchAllEmployeesResponse[] | undefined
  >();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const result = await FetchAllEmployees();

      if (result) {
        setEmployees(result);
      }
      setIsLoading(false);
    })();
  }, []);

  console.log(employees);

  return (
    <div className="">
      <div className="mt-5 md:mt-11 flex flex-col md:flex-row justify-between  space-y-5 md:space-y-0 md:items-center">
        <h2 className="text-xl font-medium">Funcionários</h2>
        <InputRoot>
          <InputField placeholder="Pesquisar" />
          <InputIcon>
            <img src={Search} className="" />
          </InputIcon>
        </InputRoot>
      </div>
      {employees && <EmployeesTable employees={employees} />}
    </div>
  );
};
export default Employees;

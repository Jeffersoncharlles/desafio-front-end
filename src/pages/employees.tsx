import EmployeesTable from "../components/employees-table";
import InputRoot, { InputField, InputIcon } from "../components/ui/input";
import Search from "../assets/search.svg";

const Employees = () => {
  return (
    <div className="">
      <div className="mt-5 md:mt-11 flex flex-col  md:flex-row justify-between  space-y-5 ">
        <h2 className="text-xl font-medium ">Funcionários</h2>
        <InputRoot>
          <InputField placeholder="Pesquisar" />
          <InputIcon>
            <img src={Search} className="" />
          </InputIcon>
        </InputRoot>
      </div>
      <EmployeesTable />
    </div>
  );
};
export default Employees;

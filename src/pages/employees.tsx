import EmployeesTable from "../components/employees-table";

const Employees = () => {
  return (
    <div className="">
      <div className="my-11 flex flex-col md:flex-row justify-between ">
        <h2 className="text-xl font-medium">Funcionários</h2>
      </div>
      <EmployeesTable />
    </div>
  );
};
export default Employees;

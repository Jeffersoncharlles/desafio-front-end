import { IFetchAllEmployeesResponse } from "../services/fetch-all-employees";
import { formatDay } from "../utils/format-day";
import { formatNumberPhone } from "../utils/format-number-phone";
import EmployeesRowMobile from "./employees-row-mobile";
import EmployeesSkeleton from "./employees-skeleton";
import Error from "./error";
import NotSearch from "./not-search";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface EmployeesTableProps {
  employees: IFetchAllEmployeesResponse[];
  loading: boolean;
  error: string;
}

const EmployeesTable = ({ employees, loading, error }: EmployeesTableProps) => {
  if (loading) return <EmployeesSkeleton />;

  if (error) return <Error />;

  if (employees.length === 0) return <NotSearch />;

  return (
    <div className="max-w-5xl xs:min-w-[335px] mt-5 mx-auto md:mt-10 bg-white  rounded-lg shadow overflow-hidden">
      <div className="">
        <Table className="table-auto w-full border-collapse">
          <TableHeader className="bg-blue-primary text-white h-12 ">
            <TableRow className="">
              <TableHead className="w-[34px] md:w-auto">FOTO</TableHead>
              <TableHead className="">NOME</TableHead>
              <TableHead className="hidden md:table-cell">CARGO</TableHead>
              <TableHead className="hidden md:table-cell text-center">
                DATA DE ADMISSÃO
              </TableHead>
              <TableHead className="hidden md:table-cell text-center">
                TELEFONE
              </TableHead>
              <TableHead className="text-center table-cell  md:hidden">
                *
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="hidden md:table-row-group">
            {employees.map((employee) => (
              <TableRow className="shadow" key={employee.id}>
                <TableCell className="text-center">
                  <div className="flex items-center">
                    <img
                      src={employee.image}
                      alt={employee.name}
                      className="w-12 h-12 rounded-full "
                    />
                  </div>
                </TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.job}</TableCell>
                <TableCell className="text-center">
                  {formatDay(employee.admission_date.toString())}
                </TableCell>
                <TableCell className="text-center">
                  {formatNumberPhone(employee.phone.toString())}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableBody className="md:hidden">
            {employees.map((employee, index) => (
              <EmployeesRowMobile employee={employee} key={index} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default EmployeesTable;

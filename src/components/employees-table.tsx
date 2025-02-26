import EmployeesRowMobile from "./employees-row-mobile";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const EmployeesTable = () => {
  const employees = [
    {
      photo: "https://via.placeholder.com/50",
      name: "Giovana L. Arruda",
      role: "Front-end",
      admissionDate: "00/00/0000",
      phone: "+55 (55) 55555-555",
    },
    {
      photo: "https://via.placeholder.com/50",
      name: "Vanessa Machado",
      role: "Front-end",
      admissionDate: "00/00/0000",
      phone: "+55 (55) 55555-555",
    },
    {
      photo: "https://via.placeholder.com/50",
      name: "Juliana Borba",
      role: "Front-end",
      admissionDate: "00/00/0000",
      phone: "+55 (55) 55555-555",
    },
  ];

  return (
    <div className="max-w-5xl  mx-auto mt-10 bg-white  rounded-lg shadow overflow-hidden">
      <div className="">
        <Table className="table-auto w-full border-collapse">
          <TableHeader className="bg-blue-primary text-white h-12 ">
            <TableRow className="">
              <TableHead className="">FOTO</TableHead>
              <TableHead className="">NOME</TableHead>
              <TableHead className="hidden md:table-cell">CARGO</TableHead>
              <TableHead className="hidden md:table-cell">
                DATA DE ADMISSÃO
              </TableHead>
              <TableHead className="hidden md:table-cell">TELEFONE</TableHead>
              <TableHead className="text-center table-cell  md:hidden">
                *
              </TableHead>
            </TableRow>
          </TableHeader>
          {/* Tabela para telas grandes */}
          <TableBody className="hidden md:table-row-group">
            {employees.map((employee, index) => (
              <TableRow className="shadow" key={index}>
                <TableCell className="text-center">
                  <div className="flex items-center">
                    <img
                      src={employee.photo}
                      alt={employee.name}
                      className="w-12 h-12 rounded-full "
                    />
                  </div>
                </TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.role}</TableCell>
                <TableCell>{employee.admissionDate}</TableCell>
                <TableCell>{employee.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* Tabela para telas grandes */}
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

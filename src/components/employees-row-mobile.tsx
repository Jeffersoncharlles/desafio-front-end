import { useState } from "react";
import { TableCell, TableRow } from "./ui/table";
import ChevronDown from "../assets/chevro-down.svg";
import ChevronUp from "../assets/chevron-up.svg";

const EmployeesRowMobile = ({ employee }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TableRow
        data-open={isOpen}
        className="shadow  data-[open=true]:shadow-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <TableCell className="flex  ">
          <div className="flex items-center">
            <img
              src={employee.photo}
              alt={employee.name}
              className="w-12 h-12 rounded-full "
            />
          </div>
        </TableCell>
        <TableCell className="font-normal ">{employee.name}</TableCell>
        <TableCell className="text-center md:hidden">
          <button className="text-gray-500 cursor-pointer">
            {isOpen ? (
              <img src={ChevronUp} alt="ChevronUp" />
            ) : (
              <img src={ChevronDown} alt="ChevronUp" />
            )}
          </button>
        </TableCell>
      </TableRow>
      {isOpen && (
        <>
          <TableRow className="w-full ">
            <TableCell colSpan={3} className="font-semibold shadow">
              <div className="flex justify-between mt-8">
                <div className=" flex flex-col space-y-4  flex-1 ">
                  <span className=" border-b border-b-gray-20/50 font-semibold text-black border-dotted">
                    Cargo:
                  </span>
                  <span className=" border-b border-b-gray-20/50 font-semibold text-black  border-dotted">
                    Data de Admissão:
                  </span>
                  <span className=" border-b border-b-gray-20/50 font-semibold text-black  border-dotted">
                    Telefone:
                  </span>
                </div>
                <div className="flex flex-col space-y-4  mb-8 text-end">
                  <span className=" border-b border-b-gray-20/50 font-normal  border-dotted ">
                    {employee.role}
                  </span>
                  <span className=" border-b border-b-gray-20/50  font-normal  border-dotted">
                    {employee.admissionDate}
                  </span>
                  <span className=" border-b border-b-gray-20/50 font-normal   border-dotted">
                    {employee.phone}
                  </span>
                </div>
              </div>
            </TableCell>
          </TableRow>
        </>
      )}
    </>
  );
};
export default EmployeesRowMobile;

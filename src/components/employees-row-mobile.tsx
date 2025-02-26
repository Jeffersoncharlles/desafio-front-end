import { useState } from "react";
import { TableCell, TableRow } from "./ui/table";
import ChevronDown from "../assets/chevro-down.svg";
import ChevronUp from "../assets/chevron-up.svg";
import { formatDay } from "../utils/format-day";
import { formatNumberPhone } from "../utils/format-number-phone";

const EmployeesRowMobile = ({ employee }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TableRow
        data-open={isOpen}
        className="shadow  data-[open=true]:shadow-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <TableCell className="flex  px-3 py-3  items-center ">
          <div className="flex items-center">
            <img
              src={employee.image}
              alt={employee.name}
              className="w-8 h-8 rounded-full "
            />
          </div>
        </TableCell>
        <TableCell className="font-normal px-3 py-2 ">
          {employee.name}
        </TableCell>
        <TableCell className="text-center md:hidden   px-3 py-2">
          <button className="text-gray-500 cursor-pointer">
            {isOpen ? (
              <img src={ChevronUp} alt="ChevronUp" className="size-8" />
            ) : (
              <img src={ChevronDown} alt="ChevronUp" className="size-8" />
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
                    {employee.job}
                  </span>
                  <span className=" border-b border-b-gray-20/50  font-normal  border-dotted">
                    {formatDay(employee.admission_date.toString())}
                  </span>
                  <span className=" border-b border-b-gray-20/50 font-normal   border-dotted">
                    {formatNumberPhone(employee.phone.toString())}
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

import { Skeleton } from "./ui/skeleton";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";

const EmployeesSkeleton = () => {
  return (
    <div className="mt-10">
      <Table>
        <TableBody>
          {Array.from({ length: 10 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell className="w-full">
                <Skeleton className="h-8 bg-gray-20" />
              </TableCell>
              <TableCell className="w-full">
                <Skeleton className="h-8 bg-gray-20" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EmployeesSkeleton;

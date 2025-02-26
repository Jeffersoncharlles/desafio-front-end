import { twMerge } from "tailwind-merge";
import { motion, MotionProps, Variants } from "motion/react";

type TableProps = React.ComponentProps<"table">;
type TableHeaderProps = React.ComponentProps<"thead">;
type TableBodyProps = React.ComponentProps<"tbody">;
type TableFooterProps = React.ComponentProps<"tfoot">;
type TableRowProps = React.ComponentProps<"tr"> & MotionProps;
type TableHeadProps = React.ComponentProps<"th">;
type TableCellProps = React.ComponentProps<"td">;

const variants: Variants = {
  hidden: { opacity: 0, y: -50 }, // Start position for the animation
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Delay each row based on its index
      duration: 0.5, // Duration of the animation
      type: "spring", // Use a spring type animation for a bounce effect
      stiffness: 100, // Spring stiffness, adjust for more/less bounce
      damping: 10, // Spring damping, adjust to change how the bounce behaves
    },
  }),
};

/**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** * */
const Table = ({ className, ...rest }: TableProps) => {
  return (
    <div className="group w-full border-collapse text-sm md:text-base">
      <table className={twMerge("", className)} {...rest} />
    </div>
  );
};

/**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** * */
const TableHeader = ({ className, ...rest }: TableHeaderProps) => {
  return <thead className={twMerge(" ", className)} {...rest} />;
};

/**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** * */
const TableBody = ({ className, ...rest }: TableBodyProps) => {
  return (
    <tbody
      className={twMerge("[&_tr:last-child]:border-0", className)}
      {...rest}
    />
  );
};

/**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** * */
const TableFooter = ({ className, ...rest }: TableFooterProps) => {
  return <tfoot className={twMerge("", className)} {...rest} />;
};

/**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** * */
const TableRow = ({ className, ...rest }: TableRowProps) => {
  return (
    <motion.tr
      className={twMerge(
        "transition-colors hover:bg-gray-20/12  cursor-pointer md:cursor-auto",
        className,
      )}
      variants={variants}
      initial="hidden"
      animate="visible"
      {...rest}
    />
  );
};

/**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** * */
const TableHead = ({ className, ...rest }: TableHeadProps) => {
  return (
    <th
      className={twMerge(
        "px-4 py-2 text-left [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...rest}
    />
  );
};

/**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** * */
const TableCell = ({ className, ...rest }: TableCellProps) => {
  return (
    <td
      className={twMerge(
        "shadow-b border-separate   px-4 py-2 md:border-none ",
        className,
      )}
      {...rest}
    />
  );
};

/**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** * */
Table.displayName = "Table";
TableHeader.displayName = "TableHeader";
TableBody.displayName = "TableBody";
TableFooter.displayName = "TableFooter";
TableRow.displayName = "TableRow";
TableHead.displayName = "TableHead";
TableCell.displayName = "TableCell";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
};

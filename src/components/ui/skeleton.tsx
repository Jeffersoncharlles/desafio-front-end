import { twMerge } from "tailwind-merge";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge("animate-pulse rounded-md bg-black", className)}
      {...props}
    />
  );
}

export { Skeleton };

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface InputRootProps extends React.ComponentProps<"div"> {
  error?: boolean;
}
export interface InputIconProps extends React.ComponentProps<"span"> {}
export interface InputFieldProps extends React.ComponentProps<"input"> {}

const InputRoot = ({ error = false, ...rest }: InputRootProps) => {
  return (
    <div
      data-error={error}
      className="bg-white group h-12 border border-gray-10 rounded-xl  px-4 flex items-center gap-2 focus-within:border-gray-20 data-[error=true]:border-danger"
      {...rest}
    />
  );
};
export default InputRoot;

const InputIcon = ({ ...rest }: InputIconProps) => {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-20 group-[&:not(:has(input:placeholder-shown))]:text-gray-10 group-data-[error=true]:text-danger"
      {...rest}
    />
  );
};

const InputField = ({ ...rest }: InputFieldProps) => {
  return (
    <input className="outline-0 placeholder-gray-20/70 w-full" {...rest} />
  );
};

InputRoot.displayName = "InputRoot";
InputIcon.displayName = "InputIcon";
InputField.displayName = "InputField";

export { InputRoot, InputIcon, InputField };

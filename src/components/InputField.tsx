import { FieldError } from "react-hook-form";

interface Props {
  label: string;
  type?: string;
  register: any;
  name: string;
  defaultValue?: any;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const InputField = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label className="text-sm text-gray-500">{label}</label>
      <input
        type={type}
        {...register(name)}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="text-xs text-red-700">
          {error.message.toString()}
        </p>
      )}
    </div>
  );
};

import React from "react";
import clsx from "clsx";
import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  type?: string;
  placeholder?: string;
  label?: string;
  register: UseFormRegisterReturn;  
  name?: string;
  className?: string;
  error?: string;
  defaultValue?: string;  
  
}

const TextBox = React.forwardRef<HTMLInputElement, IProps>(
  ({ type, placeholder, label, register, name, className, error, defaultValue }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1">
        {label && (
          <label htmlFor={name} className="text-slate-600  text-sm ">
            {label}
          </label>
        )}
        <div>
          <input
    defaultValue={defaultValue}
            name={name}
            placeholder={placeholder}
            ref={ref}
            type={type}
            {...register}
            aria-invalid={error ? "true" : "false"}
            className={clsx(
              "block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
              className
            )}
          />
        </div>
        {error && <span className="text-[11px] text-rose-500 font-semibold mt-0.5">{error}</span>}
      </div>
    );
  }
);

export default TextBox;
import React, { useId } from "react";
import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", autoComplete = "off", ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full mb-5">
      {label && (
        <label
          htmlFor={id}
          className="inline-block mb-2 text-sm font-medium text-green-400 pl-1"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        type={type}
        autoComplete={autoComplete}
        className={`px-4 py-2 rounded-lg bg-black text-green-300 placeholder:text-green-500 border border-green-800/40 outline-none focus:ring-2 focus:ring-lime-400/40 focus:border-lime-400 transition duration-200 w-full ${className}`}
        {...props}
      />
    </div>
  );
});

export default Input;

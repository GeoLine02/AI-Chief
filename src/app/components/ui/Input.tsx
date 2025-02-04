"use client";

import classNames from "classnames";
import { ChangeEvent } from "react";

type InputPropsType = {
  Icon?: React.ElementType;
  placeholder?: string;
  iconSize?: number;
  name: string;
  label?: string;
  value: string | boolean | { [key: string]: unknown };
  hasInnerShadow?: boolean;
  hasOuterShaddow?: boolean;
  type:
    | "text"
    | "file"
    | "email"
    | "password"
    | "button"
    | "submit"
    | "radio"
    | "checkbox";
  roundPecentage: "[8px]" | "full";
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  Icon,
  type,
  placeholder,
  name,
  iconSize,
  label,
  roundPecentage,
  value,
  hasInnerShadow = false,
  hasOuterShaddow = false,
  onChange,
  className,
}: InputPropsType) => {
  const inputClass = classNames({
    "rounded-[8px]": roundPecentage === "[8px]",
    "rounded-full": roundPecentage === "full",
    "shadow-inner": hasInnerShadow,
    "shadow-md": hasOuterShaddow,
  });

  return (
    <div
      className={`flex items-center gap-2 border bg-beige border-yellow shadow-gray ${className} ${inputClass}`}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        onChange={onChange}
        className="w-full outline-none border-none bg-transparent"
        type={type}
        placeholder={placeholder}
        name={name}
        value={
          type !== "checkbox"
            ? typeof value === "string"
              ? value
              : ""
            : undefined
        }
        checked={type === "checkbox" ? Boolean(value) : undefined}
      />
      {Icon && <Icon size={iconSize} />}
    </div>
  );
};

export default Input;

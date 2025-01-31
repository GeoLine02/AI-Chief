"use client";

import classNames from "classnames";

type InputPropsType = {
  Icon?: React.ElementType;
  placeholder?: string;
  iconSize?: number;
  name: string;
  label?: string;
  value: string | { [key: string]: unknown };
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
  setValue: React.Dispatch<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    React.SetStateAction<string | any>
  >;
  className?: string;
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
  setValue,
  hasInnerShadow = false,
  hasOuterShaddow = false,
  className,
}: InputPropsType) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof value === "object" && value !== null) {
      setValue((prevValues: object) => ({
        ...(typeof prevValues === "object" && prevValues !== null
          ? prevValues
          : {}),
        [e.target.name]: e.target.value,
      }));
    } else {
      setValue(e.target.value);
    }
  };

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
      {label && <label>{label}</label>}
      <input
        onChange={onChange}
        className="w-full outline-none border-none bg-transparent"
        type={type}
        placeholder={placeholder}
        name={name}
        value={typeof value === "string" ? value : ""}
      />
      {Icon && <Icon size={iconSize} />}
    </div>
  );
};

export default Input;

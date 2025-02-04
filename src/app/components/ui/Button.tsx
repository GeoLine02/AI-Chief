import classNames from "classnames";

type ButtonPorpsType = {
  type?: "button" | "submit" | "reset";
  title: string;
  color: "yellow";
  className?: string;
  rounded: "[8px]" | "full";
  onClick: () => void;
  Icon?: React.ReactNode;
  isLoading?: boolean;
  Loader?: React.ReactNode;
};

const Button = ({
  type = "button",
  title,
  color,
  className,
  rounded,
  onClick,
  Icon = false,
  isLoading = false,
  Loader = false,
}: ButtonPorpsType) => {
  const buttonPropsClass = classNames({
    "bg-yellow": color === "yellow",
    "rounded-[8px]": rounded === "[8px]",
    "rounded-full": rounded === "full",
  });

  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={`${buttonPropsClass} ${className} w-full flex items-center gap-3`}
      >
        {title}
        {Icon && Icon}
        {Loader && isLoading && Loader}
      </button>
    </div>
  );
};

export default Button;

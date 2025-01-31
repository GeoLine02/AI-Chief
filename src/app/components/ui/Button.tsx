import classNames from "classnames";

type ButtonPorpsType = {
  type?: "button" | "submit" | "reset";
  title: string;
  color: "yellow";
  className?: string;
  rounded: "[8px]" | "full";
};

const Button = ({
  type = "button",
  title,
  color,
  className,
  rounded,
}: ButtonPorpsType) => {
  const buttonPropsClass = classNames({
    "bg-yellow": color === "yellow",
    "rounded-[8px]": rounded === "[8px]",
    "rounded-full": rounded === "full",
  });

  return (
    <div>
      <button type={type} className={`${buttonPropsClass} ${className} w-full`}>
        {title}
      </button>
    </div>
  );
};

export default Button;

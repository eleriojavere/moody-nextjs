import { ReactNode } from "react";

export default function PrimaryButton({
  type,
  isDisabled,
  children,
  onClick,
  className,
}: {
  type?: "button" | "submit";
  isDisabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      className={`primary-button ${className} ${isDisabled ? "disabled" : ""}`}
      disabled={isDisabled}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

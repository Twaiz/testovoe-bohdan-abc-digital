import { ReactNode } from "react";

import styles from "./Button.module.css";

type ButtonTypes = "button" | "submit" | "reset";
type ButtonStyle = "basic" | "submit";

interface IButtonProps {
  text: string | ReactNode;
  type?: ButtonTypes;
  buttonStyle?: ButtonStyle;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = (props: IButtonProps) => {
  const {
    text,
    type = "button",
    buttonStyle = "basic",
    onClick,
    disabled = false,
  } = props;

  return (
    <button
      type={type}
      className={`${styles.button} ${
        buttonStyle === "submit" && styles["button--submit"]
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

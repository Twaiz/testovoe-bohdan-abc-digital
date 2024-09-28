import { ReactNode } from "react";

import styles from "./Button.module.css";

type ButtonTypes = "button" | "submit" | "reset";

interface IButtonProps {
  text: string | ReactNode;
  type?: ButtonTypes;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = (props: IButtonProps) => {
  const { text, type = "button", onClick, disabled = false } = props;

  return (
    <button
      type={type}
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

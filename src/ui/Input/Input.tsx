import { useState } from "react";

import styles from "./Input.module.css";

interface IInputProps {
  type?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  initialValue?: string;
  onChange?: (value: string) => void;
  minValue?: string;
  maxValue?: string;
}

const Input = (props: IInputProps) => {
  const {
    type = "text",
    name = "",
    placeholder = "",
    required = true,
    initialValue = "",
    onChange,
    minValue = "0",
    maxValue = "",
  } = props;

  const [value, setValue] = useState(initialValue);

  return (
    <input
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        if (!onChange) return;
        onChange(String(e.target.value));
      }}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className={styles.input}
      min={minValue}
      max={maxValue}
    />
  );
};

export default Input;

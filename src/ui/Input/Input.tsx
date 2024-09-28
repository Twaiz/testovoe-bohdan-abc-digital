import { useState } from "react";

interface IInputProps {
  type?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  initialValue?: string;
  onChange?: (value: string) => void;
}

const Input = (props: IInputProps) => {
  const {
    type = "text",
    name = "",
    placeholder = "",
    required = true,
    initialValue = "",
    onChange,
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
    />
  );
};

export default Input;

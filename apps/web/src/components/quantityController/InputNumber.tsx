/* eslint-disable @typescript-eslint/no-empty-interface */
import { ChangeEvent } from "react";
import classNames from "src/helpers/className";


interface InputNumberProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputNumber = ({ name, onChange, value, className, ...props }: InputNumberProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if ((/^\d+$/.test(val) || val === "") && onChange) {
      e.target.value = val;
      onChange(e);
    }
  };

  return (
    <input
      id={name}
      name={name}
      type='text'
      className={classNames(
        "px-4 rounded-sm outline-none h-10 border border-[#00000024] focus:border focus:border-[#0000008a] shadow-input",
        className,
      )}
      onChange={handleChange}
      value={value}
      {...props}
    />
  );
};

export default InputNumber;

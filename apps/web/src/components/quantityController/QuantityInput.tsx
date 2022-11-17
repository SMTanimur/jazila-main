import InputNumber from "./InputNumber";


interface QuantityInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  handleChange: (quantity: number) => void;
}

const QuantityInput = ({ handleChange, ...props }: QuantityInputProps) => {
  return (
    <InputNumber
      onChange={(e) => handleChange(Number(e.target.value))}
      className='!h-8 w-12 px-0 border-[#00000017] border text-center outline-none'
      {...props}
    />
  );
};

export default QuantityInput;

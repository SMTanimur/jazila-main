/* eslint-disable @typescript-eslint/no-empty-function */

import IconMinus from "@components/icons/IconMinus";
import IconPlus from "@components/icons/IconPlus";
import { useState } from "react";
import classNames from "src/helpers/className";
import QuantityButton from "./QuantityButton";
import QuantityInput from "./QuantityInput";

interface QuantityControllerProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultQuantity?: number;
  onChangeValue?: (quantity: number) => void;
}

const QuantityController = ({
  className,
  defaultQuantity = 1,
  onChangeValue,
}: QuantityControllerProps) => {
  const [quantity, setQuantity] = useState<number>(defaultQuantity);
  const handleIncreaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
    if (onChangeValue) onChangeValue(quantity + 1);
  };
  const handleDecreaseQuantity = () => {
    if (quantity <= 1) return;
    setQuantity((prevState) => prevState - 1);
    if (onChangeValue) onChangeValue(quantity - 1);
  };
  const handleChangeQuantity = (countQuantity: number) => {
    setQuantity(() => countQuantity);
    if (onChangeValue) onChangeValue(countQuantity);
  };
  return (
    <div className={classNames("flex", className)}>
      <QuantityButton onClick={handleDecreaseQuantity}>
        <IconMinus />
      </QuantityButton>
      <QuantityInput value={quantity} handleChange={handleChangeQuantity} />
      <QuantityButton onClick={handleIncreaseQuantity}>
        <IconPlus />
      </QuantityButton>
    </div>
  );
};

QuantityController.defaultProps = {
  defaultQuantity: 1,
  onChangeValue: () => {},
};

export default QuantityController;

import classNames from "src/helpers/className";
import { formatMoney } from "src/helpers/money";


interface PriceSaleProps {
  children: number;
  className?: string;
}

const PriceSale = ({ children, className }: PriceSaleProps) => {
  return <span className={classNames("text-red-400 ", className)}>{formatMoney(children)}</span>;
};

PriceSale.defaultProps = {
  className: "font-medium lg:text-base",
};

export default PriceSale;

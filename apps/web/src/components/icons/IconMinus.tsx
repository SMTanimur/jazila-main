/* eslint-disable @typescript-eslint/no-empty-interface */
import classNames from "src/helpers/className";


interface IconMinusProps extends React.SVGProps<SVGSVGElement> {}

const IconMinus = ({ className }: IconMinusProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={classNames("w-4 h-4", className)}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M18 12H6' />
    </svg>
  );
};

export default IconMinus;

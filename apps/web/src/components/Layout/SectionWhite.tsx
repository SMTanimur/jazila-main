import classNames from "src/helpers/className";


interface SectionWhiteProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const SectionWhite = ({ children, className }: SectionWhiteProps) => {
  return (
    <div className={classNames("px-4 py-5 bg-white rounded-md shadow2", className)}>{children}</div>
  );
};

export default SectionWhite;

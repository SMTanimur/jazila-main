import classNames from "src/helpers/className";


interface SectionGrayProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const SectionGray = ({ children, className }: SectionGrayProps) => {
  return (
    <div className={classNames("bg-[#fafafa] px-5 py-4 font-medium", className)}>{children}</div>
  );
};

export default SectionGray;

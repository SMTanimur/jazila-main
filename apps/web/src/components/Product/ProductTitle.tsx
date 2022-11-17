import Link from "next/link";


interface ProductTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  to?: string;
  styleLink?: string;
}

const ProductTitle = ({
  to,
  children,
  styleLink,
  className = "text-sm text-gray-600 line-clamp-2",
}: ProductTitleProps) => {
  if (to) {
    return (
      <Link href={to} className={styleLink}>
        <a>
        <h3 className={className}>{children}</h3>
        </a>
      </Link>
    );
  }
  return <h3 className={className}>{children}</h3>;
};

ProductTitle.defaultProps = {
  to: "",
  styleLink: "",
};

export default ProductTitle;

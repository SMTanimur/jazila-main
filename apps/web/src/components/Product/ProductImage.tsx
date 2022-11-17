/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-empty-interface */
import classNames from "src/helpers/className";

interface ProductImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const ProductImage = ({
  src,
  className = "w-[500px] h-auto ",
  alt = "product",
}: ProductImageProps) => {
  return (
    <img
      alt={alt}
      src={src}
      className={classNames("aspect-square max-w-full bg-[#fafafa]", className)}
    />
  );
};

export default ProductImage;

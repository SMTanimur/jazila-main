
import { useState } from 'react';
import classNames from 'src/helpers/className';
interface ProductImageSliderProps {
  images: string[];
}

const ProductImageSlider = ({ images }: ProductImageSliderProps) => {
  const [indexActive, setIndexActive] = useState(0);
  const handleChooseActive = (index: number) => setIndexActive(index);
  return (
    <div className="flex-shrink-0 lg:w-[400px]">
     {
      images?.length >= 0 && (
        <img src={images[indexActive]} alt="product-active" className='max-w-[400px] w-full max-h-[300px] bg-cover' />
      )
     }
      <div className="relative flex my-1 -mx-1 overflow-hidden">
        {images?.map((image, index) => (
          <img
            src={image}
            key={image}
            alt="product"
            className={classNames(
              'inline-block object-cover w-1/5 border-2 aspect-square transition-all duration-200 cursor-pointer p-1',
              indexActive === index ? ' border-orange-400' : 'border-transparent'
            )}
            onMouseEnter={() => handleChooseActive(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageSlider;

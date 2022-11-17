/* eslint-disable react-hooks/rules-of-hooks */
import { IProduct } from '@interfaces/Product';
import { useAppStore } from '@lib/store';
import Image from 'next/image';
import Link from 'next/link';
import React  from 'react';
import { toast } from 'react-toastify';

type ProductCardProps = { productData: IProduct };

function MinProductCard({ productData }: ProductCardProps) {
  const { addToCart } = useAppStore()
 
  const addProduct = (params:IProduct) => {
      toast('🛒 Add to Cart a Product')
      addToCart(params);
  };
  return (
    <div className=" group flex  items-center py-2">
      <div className="md:w-2/5 w-full mr-4 relative">
        <Link href={`product/${productData.slug}`}>
          <a>
            <Image
              className="mx-auto cursor-pointer"
              alt=""
              src={productData.productImgs[0]}
              layout="responsive"
              width={190}
              height={170}
            />
          </a>
        </Link>

        {/* <!--bages---> */}

        {productData.discount > 0 && (
          <div className=" absolute top-0 right-0 text-base font-bold text-white bg-red-600 h-7 w-12 flex items-center justify-center rounded">
            <span>{`- ${productData.discount}%`}</span>
          </div>
        )}
      </div>

      <div className="py-2 ">
        <Link href={`product/${productData.slug}`}>
          <a className=" text-gray-800 ">{productData.name}</a>
        </Link>
      
        {/* <!--Price--> */}
        <div className=" flex items-center my-2">
          <span className=" text-yellow-500 text-md font-bold mr-4">
            {`TK${
              productData.price -
              (productData.price * productData.discount) / 100
            }`}
          </span>
          {productData.discount > 0 && (
            <span className=" text-gray-500 text-sm">
              <del>{`TK${productData.price}`}</del>
            </span>
          )}
        </div>

        <div className="xl:flex md:block flex items-center space-x-1">
          <button
            className="flex items-center uppercase text-white hover:bg-yellow-500 duration-100 bg-black bg-opacity-60 text-xs font-medium p-2 rounded whitespace-nowrap"
            onClick={()=>addProduct({...productData})}
          >
            <span className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </span>
            <span>Add to Cart</span>
          </button>

       
        </div>
      </div>
    </div>
  );
}

export default MinProductCard;

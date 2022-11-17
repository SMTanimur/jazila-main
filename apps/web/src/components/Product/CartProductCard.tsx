/* eslint-disable @typescript-eslint/ban-types */

import { IProduct } from '@interfaces/Product';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type CartProductCard = { variant?: String; CartData: IProduct };
function CartProductCard({ variant, CartData }: CartProductCard) {
  console.log(CartData.productImgs);
  return (
    <div className="my-3">
      <div
        className={`grid lg:grid-cols-4 grid-cols-4 ${
          variant !== 'min' ? 'md:gap-6' : ' '
        }`}
      >
        <div className="col-span-1">
          <Link href={`product/${CartData?.slug}`}>
            <a>
              {CartData.productImgs?.length >= 0 && (
                <Image
                  className="hover:bg-opacity-50 transition-all cursor-pointer duration-200"
                  alt=""
                  src={CartData.productImgs[0]}
                  layout="responsive"
                  width={90}
                  height={100}
                />
              )}
            </a>
          </Link>
        </div>
        <div
          className={`lg:col-span-3 sm:col-span-3 col-span-3 overflow-hidden overflow-ellipsis whitespace-nowrap ${
            variant !== 'min' ? 'pl-3 md:pl-0' : 'pl-3 '
          }`}
        >
          {/* Titile */}
          <Link href={`product/${CartData.slug}`}>
            <a className=" text-gray-800 font-medium hover:text-yellow-500">
              {CartData?.name}
            </a>
          </Link>
          {/* --Rating- */}

          {/* {variant !== 'min' && (
            <div className=" flex items-center space-x-1 mt-2">
              <RatingStar value={CartData.ratings} />
            </div>
          )} */}

          {/* -Price- */}
          <div
            className={`flex items-center ${
              variant !== 'min' ? 'md:text-xl' : ' '
            }`}
          >
            <span className=" text-yellow-500  font-bold mr-4">
              {`TK${
                CartData.price - (CartData.price * CartData.discount) / 100
              }`}
            </span>
            {CartData.discount > 0 && (
              <span className=" text-gray-500 ">
                <del>{`TK${CartData.price}`}</del>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;

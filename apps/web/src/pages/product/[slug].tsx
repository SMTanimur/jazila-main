import AppLayout from '@components/Layout/AppLayout';
import SectionGray from '@components/Layout/SectionGray';
import SectionWhite from '@components/Layout/SectionWhite';
import ProductDesc from '@components/Product/ProductDesc';
import ProductImageSlider from '@components/Product/ProductImageSlider';
import ProductTitle from '@components/Product/ProductTitle';
import { useGetProduct } from '@Hooks/useProduct';
import { IProduct } from '@interfaces/Product';
import { useAppStore } from '@lib/store';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const { query } = useRouter();
  const [Product, setProduct] = useState<IProduct>();
  const { slug } = query;
  const { data } = useGetProduct(slug);
  const { addToCart } = useAppStore()
 
  const addProduct = (params:IProduct) => {
      toast('🛒 Add to Cart a Product')
      addToCart(params);
  };

  useEffect(() => {
    setProduct(data);
  }, [data]);
  return (
    <React.Fragment>
      <Head>
        <title>{Product?.name}</title>
      </Head>
      <div className="container flex flex-col gap-6 p-4 mt-6 bg-white lg:flex-row">
        <ProductImageSlider images={Product?.productImgs} />
        <div className="flex-1">
          <ProductTitle className="text-[#242424] text-base lg:text-2xl">
            {Product?.name}
          </ProductTitle>
          <div className="flex flex-wrap items-center my-4 gap-x-4 gap-y-2">
          </div>
          <SectionGray className="flex flex-col-reverse md:flex-row md:items-center gap-x-3">
          <span>Amount</span>
            <h3 className="text-lg font-medium lg:text-3xl">TK {Product?.price}</h3>
          </SectionGray>
          <div className="flex flex-col gap-y-2 md:items-center md:flex-row gap-x-4 my-4">
  
            <span className='text-gray-500 text-lg'>{Product?.stocks} Product available</span>
          </div>
          {/* add to cart */}
          <div className="xl:flex md:block flex items-center space-x-1 mt-8">
          <button
            className="flex items-center uppercase text-white hover:bg-yellow-500 duration-100 bg-black bg-opacity-60 text-xs font-medium p-2 rounded whitespace-nowrap"
            onClick={()=>addProduct({...Product})}
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
      <SectionWhite className="mt-4">
        <SectionGray>Product Details</SectionGray>
        <ProductDesc description={Product?.descriptions} />
      </SectionWhite>
      {/* <ProductRelated categoryId={Product.category} /> */}
    </React.Fragment>
  );
};

ProductDetails.layout =AppLayout
export default ProductDetails

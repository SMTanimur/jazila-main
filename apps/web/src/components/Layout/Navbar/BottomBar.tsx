/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import IconCartOutline from '@components/icons/IconCartOutline';
import { Popover } from '@components/popover';

import ProductTitle from '@components/Product/ProductTitle';
import usePopover from '@Hooks/usePopover';
import { IProduct } from '@interfaces/Product';
import { useAppStore } from '@lib/store';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';
function BottomBar() {
  const { activePopover, hidePopover, showPopover } = usePopover();
  const { cart } = useAppStore();
  const [mCart, setMCart] = useState<IProduct[]>([]);
  const [open, setOpen] = useState(false);

  const [aboutopen, setAboutOpen] = useState(false);
  const calculateTotal = () => {
    return mCart.reduce((acc, item) => acc + item.price * item.quantity!, 0);
  };
  useEffect(() => {
    setMCart(cart);
    calculateTotal();
  }, [calculateTotal, cart]);
  return (
    <div className="static top-0 h-[50px] left-0 w-full bg-pink-500 mt-6">
      <div className=" flex items-center justify-between z-20 container  px-4">
        <div>
          <button
            className=" p-2 rounded bg-gradient-to-b from-gray-600 to-gray-900 lg:hidden inline-block"
            onClick={() => setOpen(true)}
          >
            <span className=" text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </span>
          </button>
          {/* Mobile Menu */}
          {open && (
            <div
              className="fixed lg:hidden block top-0 left-0 bg-white shadow-2xl w-72 h-screen uppercase overflow-y-auto z-50"
              onClick={() => setOpen(false)}
            >
              <div className=" rounded-md p-2 bg-red-500 m-4 mx-2 text-white flex items-center justify-center cursor-pointer">
                <span>
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
                      strokeWidth="3"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </div>
              <MobileMenu></MobileMenu>
            </div>
          )}

          {/*main Menu*/}
          <ul className="hidden uppercase text-white font-bold lg:flex items-center space-x-1 text-base">
            <li className=" hover:text-gray-100">
              <Link href="/">
                <a>
                  <div className="p-3 cursor-pointer">Home</div>
                </a>
              </Link>
            </li>

            <li className=" relative">
              <Link href="/product?sort=newest">
                <a>
                  <div className="p-3 cursor-pointer">
                    New products
                    <span className=" absolute z-20 -top-7 right-0 p-1 rounded bg-purple-700 text-xs  capitalize px-4">
                      New
                    </span>
                    <span className="absolute -top-3 right-6 p-1 bg-purple-700 h-3 w-3 transform rotate-45"></span>
                  </div>
                </a>
              </Link>
            </li>

            <li className=" relative">
              <Link href="/product?sort=Bestselling">
                <a>
                  <div className="p-3 cursor-pointer">
                    Best sales
                    <span className=" absolute z-20 -top-7 right-0 p-1 rounded bg-red-600 text-xs capitalize px-4 ">
                      Hot
                    </span>
                    <span className="absolute -top-3 right-6 p-1 bg-red-600 h-3 w-3 transform rotate-45"></span>
                  </div>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/product">
                <a>
                  <div className="p-3 cursor-pointer">Shop</div>
                </a>
              </Link>
            </li>

            <li x-data="{dropdown:false}" className="relative">
              <button
                className="p-3 flex items-center font-bold uppercase"
                onClick={() => setAboutOpen(!aboutopen)}
              >
                ABOUT US
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              {aboutopen && (
                <div
                  className="absolute  bg-white border w-52 rounded shadow text-sm text-black overflow-hidden font-normal z-50"
                  onClick={() => setAboutOpen(false)}
                >
                  <Link href="/faq">
                    <a>
                      <div className=" block hover:bg-gray-100  px-4 p-3 border-b">
                        FAQ
                      </div>
                    </a>
                  </Link>

                  <Link href="/condition">
                    <a>
                      <div className=" block hover:bg-gray-100  px-4 p-3 border-b">
                        Termsconditions
                      </div>
                    </a>
                  </Link>

                  <Link href="/">
                    <a>
                      <div className=" block hover:bg-gray-100  px-4 p-3">
                        Privacy policy
                      </div>
                    </a>
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link href="/contact">
                <a className="p-3 cursor-pointer">Contact us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="relative flex-shrink-0 p-5 max5se:p-0"
          onMouseEnter={showPopover}
          onMouseLeave={hidePopover}
        >
          <Link href="/cart">
            <a>
              <IconCartOutline className="text-white" />
              <span className="absolute flex items-center justify-center w-6 h-[18px] text-xs font-medium bg-white rounded-full max5se:-top-3 max5se:-right-3 top-2 right-2 text-orangeee4">
                {mCart?.length}
              </span>
            </a>
          </Link>
          <Popover
            active={activePopover}
            className="w-[300px] md:w-[400px] max5se:!-right-3 max5se:top-[170%] !right-3 "
          >
            <div className="py-3 shadow-lg">
              <span className="px-3">New products added</span>
              <div className="mt-5">
                {mCart.length === 0 && (
                  <div className="flex flex-col items-center justify-center gap-y-1">
                    <img
                      src="/images/cart-empty.png"
                      alt="cart"
                      className="w-20 h-20"
                    />
                    <h3 className="text-[#00000066]">Your shopping cart is empty</h3>
                  </div>
                )}
                {mCart.length > 0 &&
                  mCart.slice(0, 5).map((cart) => (
                    <Link
                      key={cart._id}
                      href={`product/${cart.slug}`}
                    >
                      <a className="flex items-start p-3 gap-x-2 hover:bg-[#f8f8f8] transition-all duration-300">
                      <Image
                        src={cart.productImgs[0]}
                        width={44}
                        height={44}
                        className="border h-11 w-11 border-[#00000017]"
                      />
                      <ProductTitle className="flex-1 line-clamp-1">
                        {cart.name}
                      </ProductTitle>
                      <span className="flex-shrink-0 ml-2 text-orange-700">quantity {cart.quantity}</span>
                      </a>
                    </Link>
                  ))}
                <div className="flex items-center justify-between px-3 mt-7">
                  <div>
                    {mCart.length > 5 && (
                      <span>{mCart.length - 5} Add to Cart</span>
                    )}
                  </div>
                  <Link href="/cart">
                    <a className='py-[6px] bg-orange-600 rounded-lg px-2 text-white '>
                    Add to cart
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;

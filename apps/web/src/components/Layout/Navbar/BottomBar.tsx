import Link from 'next/link';
import {  useState } from 'react';
import MobileMenu from './MobileMenu';
type IQuantity = { quantity: number; price: number };
function BottomBar() {
  const [open, setOpen] = useState(false);
  const [cartopen, setCartOpen] = useState(false);
  const [aboutopen, setAboutOpen] = useState(false);
  return (
    <div className='static top-0 h-[50px] left-0 w-full bg-pink-500 mt-6'>
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
            <Link href="/" passHref>
              <div className="p-3 cursor-pointer">Home</div>
            </Link>
          </li>

          <li className=" relative">
            <Link href="/product?sort=newest" passHref>
              <div className="p-3 cursor-pointer">
                New products
                <span className=" absolute z-20 -top-7 right-0 p-1 rounded bg-purple-700 text-xs  capitalize px-4">
                  New
                </span>
                <span className="absolute -top-3 right-6 p-1 bg-purple-700 h-3 w-3 transform rotate-45"></span>
              </div>
            </Link>
          </li>

          <li className=" relative">
            <Link href="/product?sort=Bestselling" passHref>
              <div className="p-3 cursor-pointer">
                Best sales
                <span className=" absolute z-20 -top-7 right-0 p-1 rounded bg-red-600 text-xs capitalize px-4 ">
                  Hot
                </span>
                <span className="absolute -top-3 right-6 p-1 bg-red-600 h-3 w-3 transform rotate-45"></span>
              </div>
            </Link>
          </li>

          <li>
            <Link href="/product" passHref>
              <div className="p-3 cursor-pointer">Shop</div>
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
                <Link href="/faq" passHref>
                  <div className=" block hover:bg-gray-100  px-4 p-3 border-b">
                    FAQ
                  </div>
                </Link>

                <Link href="/condition" passHref>
                  <div className=" block hover:bg-gray-100  px-4 p-3 border-b">
                    Termsconditions
                  </div>
                </Link>

                <Link href="/" passHref>
                  <div className=" block hover:bg-gray-100  px-4 p-3">
                    Privacy policy
                  </div>
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link href="/contact" passHref>
              <a className="p-3 cursor-pointer">Contact us</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className=" relative">
        <button
          className=" text-white flex items-center space-x-2 font-bold relative uppercase p-3 px-4 bg-pink-600"
          onClick={() => setCartOpen(!cartopen)}
        >
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            {/* {state.cart.cartItems.length > 0 && (
              <span className=" absolute z-20 -top-1 left-9 h-5 w-5 rounded-full box-border flex items-center justify-center bg-red-600 text-md text-white">
                {state.cart.cartItems.length}
              </span>
            )} */}
          </span>
          <div className="lg:flex group hidden items-center space-x-2">
           {/* <span>{`My cart - $ ${state.cart.cartItems.reduce(
              (a: number, c: IQuantity) => a + c.quantity * c.price,
              0
            )}`}</span > */}
          </div>
        </button>

        {cartopen && (
          <div
            className="bg-white shadow-lg absolute right-0 top-12 border rounded z-50  items-center justify-center w-96"
            onClick={() => setCartOpen(false)}
          >
            {/* <CartItem variant="min" /> */}
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default BottomBar;

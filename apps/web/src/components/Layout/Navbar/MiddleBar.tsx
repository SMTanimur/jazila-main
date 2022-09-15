
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React, {useState } from 'react';
import AppImage from 'src/shared/AppImage';

const MiddleBar = () => {
  const [search, setSearch] = useState('');
  const [compareCartOpen, setCompareCartOpen] = useState(false)
  const [wishListsOpen, setWishListsOpen] = useState(false)

  const CompareHandler = () =>{
      if(compareCartOpen){
        setCompareCartOpen(false)
         setWishListsOpen(false)
      }else{
        setCompareCartOpen(true)
        setWishListsOpen(false)
      }

  }
  const wishListHandler = () => {
    if (wishListsOpen) {
      setWishListsOpen(false)
      setCompareCartOpen(false)
    } else {
      setWishListsOpen(true)
      setCompareCartOpen(false)
    }
  }

  const searchHandler = () => {
    // router.push(`/product?query=${search}`);
  };
  return (
     <div>
    <div className="container flex items-center px-4 py-6 text-base">
      <div className="sm:block hidden">
        <AppImage src="/jazila.png" alt="jazila" className="w-[100px] " />
      </div>
      {/*-----Search box------ */}
      <div className="w-full flex items-center px-2 sm:px-8 ">
        <input
          type="text"
          placeholder="I am looking for... "
          className="w-full p-2 outline-none focus:ring-2 border  focus:ring-green-400"
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className="sm:px-6 p-2 bg-pink-500 hover:bg-black transition-all duration-200 text-white font-bold"
          onClick={searchHandler}
        >
        
        <MagnifyingGlassIcon className='w-5'/>
        
        </button>
      </div>
      {/*________compare and wish list________ */}

      <div className="flex items-center pl-2">
        <div className='relative'>
        <div
            className=" flex items-center text-gray-500  md:mr-4 mr-1 cursor-pointer"
            onClick={CompareHandler}
          >
            <div className="p-2 border rounded-full mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <span className="hidden md:inline-block text-base">Compare</span>
          </div>
        </div>
        <div className=" relative">
          <div
            className=" flex items-center text-gray-500  md:mr-4 mr-1 cursor-pointer"
            onClick={wishListHandler}
          >
            <div className="p-2 border rounded-full sm:mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="hidden md:inline-block whitespace-nowrap">
              Wish Lists
            </span>
          </div>
          {wishListsOpen && (
            <div
              className="bg-white shadow-lg absolute right-0 top-12 border rounded z-50  items-center justify-center w-96"
              onClick={() => setWishListsOpen(false)}
            >
              {/* <CompareCartItem
                cartData={state.wishListItems.slice(0, 3)}
                removeType="WISH_LIST_REMOVE_ITEM"
                cartLink="/wish-list"
              /> */}
            </div>
          )}
        </div>
      </div>

    </div>
    </div>
  );
};

export default MiddleBar;

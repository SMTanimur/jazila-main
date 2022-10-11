/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  children:any,
  handleBrand: () => Promise<void>
};

export default function Modal({ show, setShow,children ,handleBrand}: Props) {
   const handleClose =(e)=>{
    if(e.target.id === 'wrapper') setShow(false)
   }

     
  return (
    <>
      {show && (
        <div className="fixed  flex items-center justify-center p-10 inset-0  bg-opacity-40 bg-black z-10"
         id="wrapper"
         onClick={handleClose}
        >
          <div className="bg-white w-[600px] p-8 rounded-lg max-w-2xl z-50 relative ">
            <div
              className="absolute top-5 right-5 cursor-pointer"
              onClick={() => setShow(false)}
            >
              <h1 className="text-xl text-gray-700">X</h1>
            </div>
             {children}
            <div className=" space-x-3 flex items-end justify-end  mt-6">
              <button className="px-5 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
              onClick={handleBrand}
              >
                Delete
              </button>
              <button
                onClick={() => setShow(false)}
                className="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
              >
                Close modal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
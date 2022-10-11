/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { BiDownArrow } from 'react-icons/bi';

import Modal from './Modal';

 type Props ={
    slug:string
    path:string
    handleDelete: () => Promise<void>
 }
export default function ({ slug,handleDelete,path }:Props) {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const menuRef = useRef(undefined);
  useEffect(() => {
    const handler = (e:any)=>{
     if(!menuRef.current.contains(e.target)){
      setOpen(false)
     }
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  },[]);
  
  return (
    <td className=" flex justify-center items-center  gap-2 my-2 mx-3 ">
      <div className="relative" ref={menuRef}>
        <button
          className="bg-lime-600 py-2 px-5 rounded-lg transition duration-300 text-white flex items-center gap-2"
          onClick={() => setOpen(!open)}
        >
          Action
          
            <BiDownArrow />
        </button>

        {open && (
          <div className="absolute top-11 w-[200px] right-0 z-50 bg-white py-4 px-5 rounded-lg">
            <div className="hover:bg-pink-400 hover:text-white w-full h-[40px] hover:transition duration-300 cursor-pointer rounded-md flex items-center ">
              <Link href={`/admin/${path}/${slug}`}>
                <a className="px-4">Edit</a>
              </Link>
            </div>
            <Modal show={showModal} setShow={setShowModal} handleBrand={handleDelete}>
              <div className='flex flex-col space-y-4'>
                <h3 className='text-xl font-bold text-gray-900'>Confirmation</h3>
                <p className='text-sm text-gray-500'>Are you sure? (Note: All information relevant to this will be deleted too.)</p>
              </div>
            </Modal>
            <div className="hover:bg-pink-400 hover:text-white w-full h-[40px] hover:transition duration-300 cursor-pointer rounded-md flex items-center ">
              <button
                className="px-5 py-2 rounded-md"
                onClick={() => setShowModal(true)}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </td>
  );
}

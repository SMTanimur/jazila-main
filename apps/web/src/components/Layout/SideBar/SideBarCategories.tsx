import React, { useState } from 'react';
import Link from 'next/link';
import { useGetAllCategory } from '@Hooks/useGetAllCategory';
import Image from 'next/image';
import { ICategory } from '@interfaces/Categories';
export default function SidebarCategories() {
  const [open, setOpen] = useState(false);

   const {data} =useGetAllCategory()
  return (
    <ul className=" border rounded divide-y">
      <li className="  p-3 flex items-center bg-gray-200 bg-opacity-80 rounded">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transform rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </span>
        <span className=" ml-2 font-bold uppercase ">All Categories </span>
      </li>

     {
      data?.map((item:ICategory)=>(
<Link
          key={item?.slug}
          href={`/product?category=${item.slug.split(' ').join('')}`}
          passHref
        >
          <li
            className="p-4 hover:bg-gray-100 cursor-pointer"
            // onClick={() => categoryHandler(item.title)}
          >
            <a className=" w-full gap-5 flex items-center  text-gray-500 text-sm hover:text-pink-500">
             <Image src={item.image} alt={item.categoryName} width={60} height={60}/>
              {item?.categoryName}
            </a>
          </li>
        </Link>
      ))
     }

      {/* <!-------more catagory----------> */}
      <ul className=" ">
        <ul
          className={`relative overflow-hidden transition-all duration-300 divide-y ${
            open ? 'max-h-full ' : 'max-h-0'
          }`}
        >
          <li className="p-4 hover:bg-gray-100">
            <a className="w-full  flex items-center justify-between text-gray-500 text-sm hover:text-pink-500">
              <span>
                <svg
                  className="w-4 h-4 mb-1 inline-block mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z"
                  ></path>
                </svg>
                Category Deals
              </span>
            </a>
          </li>
        </ul>

        <li className="p-4 hover:bg-gray-100">
          {open ? (
            <div className="w-full  flex items-center justify-between text-gray-500 text-sm hover:text-pink-500">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mb-1 inline-block mr-2"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"
                  ></path>
                </svg>
                Close Categories
              </span>
            </div>
          ) : (
            <div className="w-full  flex items-center justify-between text-gray-500 text-sm hover:text-pink-500">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mb-1 inline-block mr-2"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                  ></path>
                </svg>
                More Categories
              </span>
            </div>
          )}
        </li>
      </ul>
    </ul>
  );
}

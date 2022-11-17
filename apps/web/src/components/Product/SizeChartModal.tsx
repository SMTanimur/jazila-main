
import React, { Dispatch, SetStateAction } from 'react'

type modalProps = {
  OpenModal: Dispatch<SetStateAction<boolean>>
}
export default function SizeChartModal({ OpenModal }: modalProps) {
  return (
    <div className="bg-white rounded  relative w-11/12 md:w-4/5 xl:w-3/5">
      {/* -close button- */}
      <div
        className=" absolute text-gray-200 hover:text-white duration-300 cursor-pointer -top-7 right-0"
        onClick={() => OpenModal(false)}
      >
        <span className="">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
      <div>
        <div>
          {/* <Image
            className=" rounded hover:opacity-80"
            alt=""
            src={SizeCharImg}
            layout="responsive"
            width={500}
            height={250}
          /> */}
        </div>
      </div>
    </div>
  )
}

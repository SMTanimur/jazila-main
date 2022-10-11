/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function TableColImage({ image }: { image: string}) {
  return (
    <td className=" text-center border-gray-800 border-x py-2 lg:px-4 px-2 text-gray-200 whitespace-nowrap cursor-pointer">
       <img src={image} alt="" className='w-12 h-12'/>
    </td>
  )
}

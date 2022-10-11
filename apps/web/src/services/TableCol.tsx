/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'

export default function TableCol({ title }: { title: string | number }) {
  return (
    <td className=" text-center border-gray-800 border-x py-2 lg:px-4 px-2 hover:text-gray-800 text-gray-200 whitespace-nowrap cursor-pointer">
      {title}
    </td>
  )
}

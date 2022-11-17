import React, { Dispatch } from 'react'

type TabListProps = {
  title: string
  handelTab: Dispatch<React.SetStateAction<string>>
}
export default function TabList({ title, handelTab }: TabListProps) {
  return (
    <li
      className="duration-300 sm:border-r border-b bg-gray-100 hover:bg-yellow-500 hover:text-white cursor-pointer"
      onClick={() => handelTab(title)}
    >
      <span className=" font-bold uppercase text-sm p-4 px-6 block">
        {title}
      </span>
    </li>
  )
}

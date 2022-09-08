import React from 'react'
import { countItemList } from '../../../data/ContactData'
export default function ContactDetails() {
  return (
    <>
      {countItemList.map((item) => (
        <li key={item.title} className=" text-gray-500 mb-4">
          <a>
            <span className=" inline-block">{item.icon}</span>
            <span className=" ml-3">{item.title}</span>
          </a>
        </li>
      ))}
    </>
  )
}

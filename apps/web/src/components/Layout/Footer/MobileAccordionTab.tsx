import React, { useState } from 'react'
import { countItemList } from '../../../data/ContactData'
import { footerMenuItem } from '../../../data/FooterData'

export default function MobileAccordionTab() {
  const [open, setOpen] = useState('')

  const handleClick = (item: React.SetStateAction<string>) => {
    if (open === '') {
      setOpen(item)
    } else {
      setOpen('')
    }
  }
  return (
    <div className="w-11/12">
      <div className="mb-3">
        <button
          className="bg-gray-200 bg-opacity-90 p-2 px-4 rounded border  focus:outline-none flex items-center justify-between w-full font-bold text-sm"
          onClick={() => {
            handleClick('CONTACT')
          }}
        >
          <span>CONTACT</span>
          <span
            className={`transform duration-500 p-1 bg-gray-400 rounded-full text-white ${
              open === 'CONTACT' && '-rotate-180'
            }`}
          >
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
                strokeWidth="4"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
        <div
          className={`relative overflow-hidden transition-all  duration-300 max-h-full ${
            open === 'CONTACT' ? ' block' : 'hidden'
          }`}
        >
          <ul className=" p-5 pb-0">
            <div>
              {countItemList.map((item) => (
                <li key={item.title} className=" text-gray-500 mb-4">
                  <a>
                    <span className=" inline-block">{item.icon}</span>
                    <span className=" ml-3">{item.title}</span>
                  </a>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>

      {footerMenuItem.map((menuItem) => {
        return (
          <div key={menuItem.title} className="mb-3">
            <button
              className="bg-gray-200 bg-opacity-90 p-2 px-4 rounded border  focus:outline-none flex items-center justify-between w-full font-bold text-sm"
              onClick={() => {
                handleClick(menuItem.title)
              }}
            >
              <span>{menuItem.title}</span>
              <span
                className={`transform duration-500 p-1 bg-gray-400 rounded-full text-white ${
                  open === `${menuItem.title}` && '-rotate-180'
                }`}
              >
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
                    strokeWidth="4"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>

            <div
              className={`relative overflow-hidden transition-all  duration-500 max-h-full ${
                open === `${menuItem.title}` ? ' block' : 'hidden'
              }`}
            >
              <ul className="p-5 pb-0">
                {menuItem.items.map((item, i) => {
                  return (
                    <li key={i} className=" text-gray-600 mb-2">
                      <a>
                        <span className=" inline-block">
                          <svg
                            className="svg-inline--fa fa-dot-circle fa-w-16 w-2 h-2"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                            ></path>
                          </svg>
                        </span>
                        <span className=" ml-2">{item.name}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}

import React, { useState } from 'react'
import { socialIconData } from '../../../data/FooterData'

export default function VerticalSocialButton() {
  const [socialBtnOpen, setSocialBtnOpen] = useState(false)
  return (
    <div className=" hidden md:block ">
      <div
        className={`fixed xl:right-10 right-3 bottom-60  m-2 mx-0 overflow-hidden transition-all  duration-500 z-10  ${
          socialBtnOpen ? 'max-h-full' : 'max-h-0'
        }`}
      >
        {socialIconData.map((social) => (
          <a
            key={social.id}
            className="mb-2 p-2 duration-300 bg-black bg-opacity-20 rounded-md hover:text-white hover:bg-yellow-500 block"
            href="#"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <button
        onClick={() => setSocialBtnOpen(!socialBtnOpen)}
        className="focus:outline-none p-2 duration-300 bg-black bg-opacity-40 rounded-full text-white hover:bg-yellow-500 fixed xl:right-10 right-3 bottom-52 m-2 mx-0 z-10"
      >
        {socialBtnOpen ? (
          <svg
            x-show="selected==1"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="5"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            x-show="selected==null"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="5"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        )}
      </button>
    </div>
  )
}

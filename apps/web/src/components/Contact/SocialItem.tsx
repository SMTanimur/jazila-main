import { socialIconData } from '@data/FooterData'
import React from 'react'

export default function SocialItem() {
  return (
    <div className=" flex items-center">
      {socialIconData.map((item) => (
        <div
          key={item.bgColor}
          className={`mr-2 p-2 hover:shadow-2xl duration-300 text-white transform hover:-translate-y-1 ${item.bgColor}`}
        >
          {item.icon}
        </div>
      ))}
    </div>
  )
}

import React from 'react'
import { countItemList } from '../../../data/ContactData'
import { footerMenuItem } from '../../../data/FooterData'
export default function DesktopFooterItem() {
  return (
    <div className="lg:grid hidden md:grid-cols-6  xl:gap-6 border-t py-5 xl:px-24 sm:px-10 px-4">
      <div className=" col-span-2">
        <div className=" mb-8">
          <h3 className=" font-bold leading-loose text-sm">CONTACT US</h3>
          <div className="h-0.5 w-20 bg-yellow-500"></div>
        </div>

        <div>
          <ul>
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
      {/* ------002------- */}

      {footerMenuItem.map((menuItem) => {
        return (
          <div key={menuItem.title}>
            <div className=" mb-8">
              <h3 className=" font-bold leading-loose text-sm">
                {menuItem.title}
              </h3>
              <div className="h-0.5 w-20 bg-yellow-500"></div>
            </div>

            <div>
              <ul>
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

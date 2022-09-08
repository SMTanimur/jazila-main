import Link from 'next/link'
import React from 'react'

const menuItem = [
  { title: 'SHOP', link: '/product' },
  { title: 'CONTACT', link: '/contact' },
  { title: 'FAQ', link: '/faq' },
  { title: 'TERMS & CONDITION', link: '/condition' },
  { title: 'PRIVACY & POLICY', link: '/' },
  { title: 'LOGIN', link: '/login' },
  { title: 'REGISTER', link: '/register' },
]
function MobileMenu() {
  return (
    <div className="space-x-6 text-xs font-semibold w-full">
      <ul className="w-full tracking-wider">
        <Link href="/" passHref>
          <li className=" duration-300 hover:shadow border-b border-t py-4 px-10 cursor-pointer">
            HOME
          </li>
        </Link>
        <Link href="/product?sort=newest" passHref>
          <li className=" duration-300 hover:tracking-widest hover:shadow border-b py-4 px-10 relative cursor-pointer">
            New products
            <span className=" absolute z-20 top-3 right-2 mr-1 p-1 rounded bg-purple-700 text-xs capitalize px-4 text-white hover:text-white">
              New
            </span>
            <span className="absolute top-5 right-16 p-1 bg-purple-700 h-2 w-2 transform rotate-45"></span>
          </li>
        </Link>
        <Link href="/product?sort=Bestselling" passHref>
          <li className=" duration-300 hover:tracking-widest hover:shadow border-b py-4 px-10 relative cursor-pointer">
            <a href="shop.html">
              Best sales
              <span className=" absolute z-20 top-3 right-2 mr-1 p-1 rounded bg-red-600 text-xs capitalize px-5 text-white hover:text-white">
                Hot
              </span>
              <span className="absolute top-5 right-16 p-1 bg-red-600 h-2 w-2 mr-1 transform rotate-45"></span>
            </a>
          </li>
        </Link>

        {menuItem.map((item) => (
          <Link key={item.link} href={item.link} passHref>
            <li className=" duration-300 hover:tracking-widest hover:shadow border-b py-4 px-10 cursor-pointer">
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default MobileMenu

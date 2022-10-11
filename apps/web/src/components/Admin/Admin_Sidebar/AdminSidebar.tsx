/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { SetStateAction, useState } from 'react';
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';
import { RiArrowLeftSLine } from 'react-icons/ri';
import Logo from 'public/jazila.png';
import { AdminDashboardMenuItem } from '@data/DashboardData';
const AdminSidebar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();

  const goTo = (
    title: SetStateAction<string>,
    link: string,
    dropdown: boolean
  ) => {
    dropdown && router.push(link)

    active === '' ? setActive(title) : setActive('')
  }
  return (
    <div className="bg-gray-700 min-h-screen z-50">
      <button
        className="focus:outline-none z-50 text-sky-600 md:hidden text-2xl fixed top-6 right-8"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        {mobileMenu ? <AiOutlineClose /> : <AiOutlineMenuUnfold />}
      </button>

      <div
        className={`min-h-screen bg-gray-900 transition-all duration-300 border-r border-sky-800 ${
          open ? 'sm:w-20' : 'w-64'
        }  ${
          mobileMenu
            ? 'absolute top-0 left-0'
            : 'hidden sticky md:block top-0 -left-64'
        }`}
      >
        <div
          className={`text-sky-500 text-center relative py-3 ${
            open ? 'text-base px-2 xs:px-4' : 'text-2xl px-4'
          }`}
        >
          <Link href="/">
            <a>
            <Image src={Logo} width={50} height={50} />
            </a>
          </Link>
          <span
            className=" z-[1000] border-[3px] absolute top-4 -right-4 border-sky-400 text-sky-500 rounded-full"
            onClick={() => setOpen(!open)}
          >
            <RiArrowLeftSLine
              className={`text-sky-500 transition-all duration-300  w-6 h-6 transform ${
                open ? '-rotate-180' : 'rotate-190'
              }`}
            />
          </span>

          <div className="px-4 space-y-2  ">
          {/* <!-- SideBar Toggle --> */}

          {AdminDashboardMenuItem.map((menu) => {
            return (
              <div
                key={menu.title}
                className="relative text-base "
                onClick={() =>
                  goTo(menu.title, `${menu.link}`, menu.dropdown.length === 0)
                }
              >
                <div
                  className={`flex
              justify-between
              text-sky-300 hover:text-sky-600 transition duration-200 hover:bg-gray-800
              items-center
              space-x-2
              rounded-md
              p-2
              cursor-pointer group ${
                open ? 'sm:justify-center' : 'justify-start'
              } ${
                    active === menu.title
                      ? 'text-gray-200 bg-gray-800'
                      : 'text-gray-400'
                  }`}
                >
                  <div className="relative flex space-x-2 items-center">
                    {menu.icon}
                    <h1
                      className={` ${
                        open
                          ? 'sm:hidden hidden  group-hover:block sm:absolute top-0 left-14 sm:border border-sky-600 sm:text-md sm:bg-gray-900 sm:px-2 sm:py-1 sm:rounded-md transition duration-300'
                          : ''
                      }`}
                    >
                      {menu.title}
                    </h1>
                  </div>

                  {menu.dropdown.length === 0 ? (
                    menu.title === 'Chat' ? (
                      <h1
                        className={`w-5 h-5 p-1 text-base bg-red-500 rounded-md leading-3 text-center text-white ${
                          open ? ' absolute top-0 left-5' : ''
                        }`}
                      >
                        8
                      </h1>
                    ) : (
                      ''
                    )
                  ) : (
                    <svg
                      className={`h-4 w-4  ${
                        active === menu.title
                          ? ' transition duration-300 rotate-180'
                          : 'transition duration-300 rotate-0'
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>

                {/* <!-- Dropdown content --> */}

                {active === menu.title ? (
                  <div
                    className={`text-gray-400 space-y-3  ${
                      open
                        ? 'sm:absolute top-0 left-20 sm:shadow-md sm:z-10 sm:bg-gray-900 sm:rounded-md sm:p-4 sm:ml-0 w-28 border-2 border-sky-800 '
                        : 'border-l border-dashed border-gray-400 ml-4'
                    }`}
                  >
                    <ul>
                      {menu?.dropdown.map((drop) => {
                        return (
                          <Link key={drop.link} href={`${drop.link}`} passHref>
                            <li className=" hover:bg-gray-800 py-2 cursor-pointer transition duration-300">
                              <h1 className="pl-5 text-gray-200 hover:text-sky-500">
                                {drop.title}
                              </h1>
                            </li>
                          </Link>
                        )
                      })}
                    </ul>
                  </div>
                ) : (
                  ''
                )}
              </div>
            )
          })}
        </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;

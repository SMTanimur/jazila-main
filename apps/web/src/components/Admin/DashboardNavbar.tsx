import { useUser } from '@Hooks/useUser'
import Image from 'next/image'
import {  useState } from 'react'
import NotificationList from 'src/helpers/NotificationList'
import ProfileList from 'src/helpers/ProfileList'
import blog from '../../../public/images/10.jpg'

function DashboardNavbar() {
  const [open, setOpen] = useState(false)
  const [notificationOpen, setNotificationOpen] = useState(false)
   const {data:user}=useUser()
  return (
    <div className="flex sticky top-0 w-full   bg-gray-900 py-4 items-center justify-around shadow-xl border-b border-sky-800">
      <div className="relative flex flex-1 max-w-xs sm:max-w-xs lg:max-w-xl">
        <span className="absolute inset-y-2 left-8 flex items-center pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-sky-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <input
          className=" mx-6 border-2 border-sky-800  pl-12 focus:border-sky-400 focus:ring-sky-400 transition duration-300 items-center w-full h-10 px-4 text-sm font-normal tracking-wider text-white placeholder-gray-500 bg-white/10 rounded-lg focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-6">
          <span className="text-gray-500 stroke-current" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div
          className="relative flex items-center"
          onClick={() => setOpen(!open)}
        >
          <Image
            className=" rounded-full hover:opacity-80"
            alt=""
            src={blog}
            layout="fixed"
            width={40}
            height={40}
          />

          <a className="inline-flex items-center pl-4">
            <span className="text-md hover:text-sky-700 hidden md:block  font-normal tracking-widest text-sky-300 transition duration-300">
              {user?.name}
            </span>
            <span className="text-gray-500 fill-current" />
          </a>

          <div
            className={` right-0 py-2 mt-2 overflow-hidden dark:bg-gray-900 z-30 bg-white top-16 left-0 absolute w-52 rounded-md shadow-md border border-sky-700 transition duration-300${
              open ? ' opacity-1 scale-1 ' : 'hidden opacity-0 scale-0'
            }`}
          >
            <a className="flex justify-between items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
              <Image
                className=" hover:opacity-80 flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                alt=""
                src={blog}
                layout="fixed"
                width={40}
                height={40}
              />

              <div className="mx-1">
                <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {user?.name}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {user?.email}
                </p>
              </div>
            </a>

            <hr className="border-gray-200 dark:border-gray-700 "></hr>
            <ProfileList></ProfileList>
            <ProfileList></ProfileList>
            <ProfileList></ProfileList>
            <ProfileList></ProfileList>
          </div>
        </div>

        <button
          className=" pl-3 p-0.5 relative text-sky-400 hover:text-sky-700  transition duration-300"
          onClick={() => setNotificationOpen(!notificationOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>

          <span className="  absolute top-0 w-3 h-3 bg-red-500 border border-gray-900 rounded-full right-1">
            <span className=" animate-ping -left-0 -top-1 absolute inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <div
            className={` bg-gray-900  top-16 -right-9 absolute w-80 rounded-md shadow-md border border-sky-700 transition duration-300${
              notificationOpen
                ? 'opacity-1 scale-1'
                : 'hidden opacity-0 scale-0'
            }`}
          >
            <NotificationList></NotificationList>
            <NotificationList></NotificationList>
            <NotificationList></NotificationList>
            <div>
              <div className="block py-2 font-bold text-center text-white bg-gray-800 dark:bg-gray-800">
                See all notifications
              </div>
            </div>
          </div>
        </button>

        <div className=" pl-4 pr-9 block md:hidden"></div>
      </div>
    </div>
  )
}

export default DashboardNavbar

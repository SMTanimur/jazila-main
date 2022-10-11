import Image from 'next/image'
import React from 'react'
import blog from '../../public/images/10.jpg'
function NotificationList() {
  return (
    <div className="py-2">
      <a className="flex items-center justify-between px-4 py-3 -mx-2 transition-colors duration-200 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">
        <Image
          className=" rounded-full w-8 hover:opacity-80"
          alt="a"
          src={blog}
          layout="fixed"
          width={40}
          height={40}
        />

        <div>
          <p className="mx-2 text-sm text-gray-200 dark:text-white">
            <span className="font-bold mx-2">Sara Salas</span>
            replied on the replied on replied on the replied on the
          </p>
          <p className="font-bold text-left text-sky-500">10 minutes ago</p>
        </div>
      </a>
    </div>
  )
}

export default NotificationList

/* eslint-disable react-hooks/exhaustive-deps */

import { logOutUser } from '@api/auth';
import { useUser } from '@Hooks/useUser';
import Link from 'next/link';
import { useRouter } from 'next/router';

import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { socialIconData } from 'src/data/Social';

const TopBar = () => {
  const {push}= useRouter()
  const queryClient = useQueryClient();
  const { data: user } = useUser();
    const handleLogOut = async () => {
      try {
        await logOutUser();
         toast.success('user logOut successfully')
        await  queryClient.invalidateQueries(['me'])
         push('/')
      } catch (error) {
        toast.error(error)
        console.log(error);
      }
    }
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-100  sm:px-4 py-3">
      <div className="flex  justify-between items-center container px-4">
        {/* left side */}
        <div className="sm:block hidden w-[20%]">
          <div className="text-sm sm:text-base text-gray-600">
            {user ? (
              <div>
                Welcome to E-market
                <Link href="/profile">
                  <a className=" ml-4 text-md font-medium capitalize hover:text-pink-500 transition duration-300 cursor-pointer ">
                    {user?.name}
                  </a>
                </Link>
              </div>
            ) : (
              <div>
                Please
                <Link href="/login">
                  <a className=" text-pink-500 mx-2">Sign in </a>
                </Link>
                or
                <Link href="/register">
                  <a className="ml-2 text-pink-500"> Register</a>
                </Link>
              </div>
            )}
          </div>
        </div>
        {/*_..........Right side............*/}
        <div className="flex w-full justify-between  sm:justify-end items-center md:divide-x-2 divide-gray-300 text-sm">
          <span className="hidden md:flex items-center md:px-4 text-base">
            Call: 09678-300400
          </span>
          {/*---------user of account details--------- */}
          <div className="relative">
            <a
              className=" flex items-center sm:px-4 whitespace-nowrap cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              My Account
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-caret-down-fill h-3 w-3 ml-1"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </a>

            {open && (
              <div
                className=" absolute rounded p-3 bg-white border w-full shadow mt-2 text-base overflow-hidden duration-300 z-10"
                onClick={() => setOpen(false)}
              >
                <ul className=" text-base">
                  {user?.role === 'admin' ? (
                    <Link href="/dashboard" passHref>
                      <li className=" py-1 rounded cursor-pointer capitalize hover:bg-gray-100 transition duration-200 border-b border-gray-300">
                        Admin panel
                      </li>
                    </Link>
                  ) : (
                    <Link href="/profile" passHref>
                      <li className=" py-1 rounded cursor-pointer capitalize hover:bg-gray-100 transition duration-200 border-b border-gray-300">
                        Profile
                      </li>
                    </Link>
                  )}
                  <Link href="/product/compare" passHref>
                    <li className=" py-1 rounded cursor-pointer capitalize hover:bg-gray-100 transition duration-200 border-b border-gray-300">
                      Compare
                    </li>
                  </Link>
                  <Link href="/product/wish-list" passHref>
                    <li className=" py-1 rounded cursor-pointer capitalize hover:bg-gray-100 transition duration-200 border-b border-gray-300">
                      Wish List
                    </li>
                  </Link>
                  <Link href="/place-older" passHref>
                    <li className="py-1 rounded cursor-pointer  capitalize hover:bg-gray-100 transition duration-200 border-b border-gray-300">
                      Check out
                    </li>
                  </Link>

                  {user ? (
                    <li className=" py-1 rounded cursor-pointer  capitalize hover:bg-gray-100 transition duration-200 border-b border-gray-300">
                      <button
                        onClick={handleLogOut}
                      >
                        logout
                      </button>
                    </li>
                  ) : (
                    <Link href="/login" passHref>
                      <li className="py-1 rounded cursor-pointer  capitalize hover:bg-gray-100 transition duration-200 border-b border-gray-300">
                        Sign in
                      </li>
                    </Link>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/*----social network link------- */}
          <div className="flex sm:px-4 items-center space-x-6">
            {socialIconData.map((social) => (
              <a
                key={social.id}
                className=" text-gray-600 text-base hover:text-pink-500 transition-all duration-700"
                href={social.link}
              >
                {social.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

import { socialIconData, footerMenu } from '../../../data/FooterData';
import MobileAccordionTab from './MobileAccordionTab';
import VerticalSocialButton from './VerticalSocialButton';
import BackToTop from './ScrollToTop';
import DesktopFooterItem from './DesktopFooterItem';

function Footer() {
 
  return (
    <footer>
      {/* --------001-------------- */}
      <div className="mt-10  bg-pink-500 py-5  px-4">
      <div className='sm:flex items-center justify-center sm:justify-between container'>
        <div>
          <img
            className=" sm:mb-0 mb-6 sm:mx-0 mx-auto"
            src="images/logo-fy.webp"
            alt=""
          />
        </div>

        <div className=" hidden lg:block">
          <ul className=" flex items-center justify-center text-gray-200 duration-100">
            {footerMenu.map((menu) => {
              return (
                <li key={menu.title}>
                  <Link href={menu.link} passHref>
                    <p className="mr-3 p-2 hover:text-white ">{menu.title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className=" flex items-center justify-center">
          {socialIconData.map((social) => (
            <a
              key={social.id}
              className="mr-3 p-3 text-white duration-300 bg-black bg-opacity-25 rounded-full hover:bg-white hover:text-black"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      </div>
      {/*   tab accordion 002-------- */}
      <div className="container flex lg:hidden items-center justify-center py-5">
        <MobileAccordionTab></MobileAccordionTab>
      </div>
      {/* ----------002--------------- */}

      <DesktopFooterItem></DesktopFooterItem>

      {/* -------003------------- */}
      <div className="grid container md:grid-cols-2 md:gap-0 gap-6 border-t py-5 xl:px-24 sm:px-10 px-4">
        <div className=" flex items-center justify-center md:justify-start">
          <span className=" lg:block md:hidden block  mr-6">
            <svg
              className="svg-inline--fa fa-paper-plane fa-w-16 h-10 w-10"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"
              ></path>
            </svg>
          </span>
          <div>
            <h4 className=" text-2xl font-bold">Sign up For Newsletter</h4>
            <p className=" text-gray-400 text-sm">
              Well never share your email address with a third-party.
            </p>
          </div>
        </div>

        <div className=" px-2 flex items-center">
          <input
            className=" w-full p-3 rounded-l border-r-0 px-4 text-sm border text-gray-600 outline-none focus:ring focus:ring-blue-200"
            type="text"
            placeholder="Your email address"
          ></input>
          <button className="px-6 p-3 uppercase bg-pink-500 hover:bg-black text-white font-bold rounded-r">
            Subscribe
          </button>
        </div>
      </div>
      {/* ---------004-------------- */}
      <div className="container lg:flex items-start  justify-center lg:justify-between text-gray-500 border-t py-4 xl:px-24 sm:px-10 px-4">
        <div className="flex items-center justify-center text-center">
          © Powered by
          <p className=" text-pink-500">SM Tanimur Rahman</p>
        </div>
        <div className="pt-4 text-center"></div>
      </div>

      {/* ===Back to top button and social button== */}
      <div className='container'>
        <BackToTop></BackToTop>
        <VerticalSocialButton></VerticalSocialButton>
      </div>
    </footer>
  );
}

export default Footer;

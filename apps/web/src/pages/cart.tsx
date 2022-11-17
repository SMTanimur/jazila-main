/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import CartDetails from '@components/cart/CartDetails';

import AppLayout from '@components/Layout/AppLayout';
import { useAppStore } from '@lib/store';
import CartItem from '@components/cart/CartItem';
import { GetServerSideProps } from 'next';
import { withAuth } from '@HOC/withAuth';


function cart() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const {cart:carts}= useAppStore()

   useEffect(()=>{
     if(carts.length <= 0){
      router.push('/')
     }
   },[carts, router])
  const checkoutHandler = () => {
    router.push('/shipping');
  };
  return (
    <React.Fragment>
     <section className="xl:px-24 sm:px-10 px-4 pt-5">
        <div className=" grid  md:grid-cols-5 border  border-gray-200">
          <div className=" md:col-span-3 border-r  border-gray-200">
            <CartItem />
          </div>
          <div className=" md:col-span-2 py-2 px-4">
            <ul className=" border rounded divide-y">
              <CartDetails></CartDetails>
              <li>
                <button
                  className=" p-3 w-full bg-yellow-500 bg-opacity-80 rounded text-lg text-white font-bold uppercase hover:bg-yellow-600 transition duration-200 "
                  onClick={checkoutHandler}
                >
                  Check Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

cart.layout =AppLayout
export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});
export default cart
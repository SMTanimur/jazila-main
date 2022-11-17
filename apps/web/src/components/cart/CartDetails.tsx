
import { IProduct } from '@interfaces/Product'
import { useAppStore } from '@lib/store'
import React, { useEffect, useState } from 'react'



export default function CartDetails() {
     const [mCart, setMCart] = useState([])
  const {cart}=useAppStore()
  const calculateTotal = () => {
    return mCart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }
 
   useEffect(()=>{
      setMCart(cart)
   },[cart])

  return (
    <React.Fragment>
      <li className="p-3 flex items-center justify-evenly bg-gray-200 bg-opacity-80 rounded   text-lg text-black font-bold capitalize">
        {/* <div className="">{`(items) ${items}`}</div>
        <div className="">Subtotal</div>
        <div className="">${itemsPrice}</div> */}
      </li>
      <li className="p-4 flex justify-between items-center font-medium text-lg capitalize">
        <div className="">Qunty</div>
        <div className="">Price</div>
        <div className="">total</div>
      </li>
     
      { mCart ? mCart.map((item:IProduct) => (
         <li
         key={item.slug}
         className="p-4 flex justify-between items-center hover:bg-gray-100"
       >
          <div className="">{item.quantity}</div>
          <div className="">TK{item?.price}</div>
          <div className="">TK{item?.quantity * item?.price}</div>
          </li>
      )):""}
      <li className="border-yellow-600 border-t-2"></li>
      <li className=" flex justify-between items-center p-4 text-black font-bold">
        <div className="">Items</div>
        <div className="">TK{calculateTotal()}</div>
      </li>
    </React.Fragment>
  )
}

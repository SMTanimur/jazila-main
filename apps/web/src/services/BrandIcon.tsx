import Image from 'next/image'
import React from 'react'
import brand1 from '../../../public/images/pay-1.webp'
import brand2 from '../../../public/images/pay-2.webp'
import brand3 from '../../../public/images/pay-3.webp'
import brand4 from '../../../public/images/pay-4.webp'
import brand5 from '../../../public/images/pay-5.webp'

const payList = [brand1, brand2, brand3, brand4, brand5]
function BrandIcon() {
  return (
    <div>
      {payList.map((pay, i) => (
        <div key={i} className="inline-block mb-4 md:mr-2 mr-4 ">
          <Image alt="" src={pay} layout="fixed" width={60} height={25} />
        </div>
      ))}
    </div>
  )
}

export default BrandIcon

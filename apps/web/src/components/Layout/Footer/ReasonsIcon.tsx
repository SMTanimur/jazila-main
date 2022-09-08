import Image from 'next/image'
import React from 'react'
import Reasons1 from '../../../public/images/reasons-1.png'
import Reasons2 from '../../../public/images/reasons-2.png'
import Reasons3 from '../../../public/images/reasons-3.png'
import Reasons4 from '../../../public/images/reasons-4.png'

const ReasonsList = [Reasons1, Reasons2, Reasons3, Reasons4]

export default function ReasonsIcon() {
  return (
    <div className="">
      {ReasonsList.map((Reasons, i) => (
        <div key={i} className="inline-block mb-1 mr-4 ">
          <Image alt="" src={Reasons} layout="fixed" width={50} height={50} />
        </div>
      ))}
    </div>
  )
}

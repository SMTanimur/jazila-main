import { useUser } from '@Hooks/useUser'
import Image from 'next/image'
import React from 'react'
import DashboardCard from './DashboardCard'
 
const ClientSidebar_Dashboard= ( )=> {
  const {data}=useUser()
  return (
    <React.Fragment>
    <div className=' bg-white shadow-sm mt-10  py-4 flex flex-col rounded-md'>
       <div className='flex flex-col gap-5 items-center'>
         {
            data?.avatar ?  <Image src={data?.avatar} alt={data?.name} width={80} height={80} 
            className="rounded-full"
           /> :''
         }
          <h4 className='font-bold text-gray-600'>{data?.name}</h4>
       </div>
       {/*--------user dashboard menu-------- */}
       <div className='flex items-center gap-3 pl-4 my-7 text-gray-400'>
          <h5>MENU</h5>
          <hr  className='w-full'/>
       </div>
       <DashboardCard/>
    </div>
    </React.Fragment>
  )
}

export default ClientSidebar_Dashboard
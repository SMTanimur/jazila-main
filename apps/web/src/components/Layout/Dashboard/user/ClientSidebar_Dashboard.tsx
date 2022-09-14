import { useUser } from '@Hooks/useUser'
import React from 'react'
 
const ClientSidebar_Dashboard= ( )=> {
  const {data}=useUser()
  return (
    <React.Fragment>
    <div className=' bg-white shadow-sm pt-10 '>
     <h1 className='text-xl'>helos</h1>
    </div>
    </React.Fragment>
  )
}

export default ClientSidebar_Dashboard
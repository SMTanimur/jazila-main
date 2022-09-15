/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { GetServerSideProps } from 'next'
import { withAuth } from '@HOC/withAuth'
import DashboardLayout from '@components/Layout/Dashboard/DashboardLayout'
import Head from 'next/head'
import UserInfoForm from '@shared/UserInfoForm'

function Profile() {
 
  return (
    <React.Fragment>
      <Head>
        <title>Profile</title>
      </Head>
       
    <section className=" px-4 md:pl-8 pt-10 mt-5 ">
         <h1 className='text-xl text-gray-700 font-bold'>Manage Profile</h1>
         <UserInfoForm/>
      </section>
      </React.Fragment>
  )
}

Profile.layout = DashboardLayout
export default Profile
export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});
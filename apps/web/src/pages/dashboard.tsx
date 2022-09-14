/* eslint-disable react-hooks/rules-of-hooks */
import DashboardLayout from '@components/Layout/Dashboard/DashboardLayout';
import { withAuth } from '@HOC/withAuth';
import { useUser } from '@Hooks/useUser';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

function dashboard() {
  const {data:user}=useUser()
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
    <div className="pt-10 container">
       
      <h1 className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maxime possimus labore quae, non saepe minima! Sit excepturi hic atque? Ex sint suscipit nostrum culpa quam sapiente? Esse harum consequatur consequuntur enim molestias quidem itaque dolorem soluta. Deleniti tempore non culpa dolorum impedit possimus molestias hic eius excepturi fugit ratione nisi nemo autem optio architecto accusamus nobis, asperiores rem? Porro dolores repellendus rem repudiandae molestias cumque eligendi! Dolorem, adipisci quas, ad reiciendis quo molestiae nostrum libero molestias accusamus, quisquam obcaecati dicta. Iure neque corporis amet maxime ratione dolore sed harum tenetur molestiae repudiandae, qui optio quam alias eos quaerat distinctio tempora ut. Iusto, dignissimos? Doloribus, magnam? Animi sequi iure incidunt consectetur dignissimos sapiente laboriosam, minima dicta iste culpa odit ipsum suscipit quam ipsam rerum nam natus dolor sit enim quas corporis ea assumenda! Atque laboriosam consequuntur vero delectus esse repellat quas officia ad, earum minima adipisci itaque excepturi beatae, dicta quo perspiciatis magnam facere perferendis quidem distinctio? Facilis, laboriosam! Rerum aut qui exercitationem pariatur, officia quasi. Exercitationem laborum porro ipsum vero excepturi at perspiciatis officiis animi. Sequi eum accusamus earum corrupti nostrum repudiandae facere nam deserunt mollitia, aspernatur amet, sed cupiditate animi, adipisci recusandae quia modi est nobis. Et, architecto?</h1>
    </div>
    </React.Fragment>
  );
}
// dashboard.layout = DashboardLayout;
export default dashboard;
export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});

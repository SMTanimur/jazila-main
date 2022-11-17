import BannerCarousel from "@components/Home/BannerCarousel";
import CategoriesCard from "@components/Home/CategoriesCard";
import SidebarCategories from "@components/Layout/SideBar/SideBarCategories";
import MinProductCard from "@components/Product/MinProductCard";
import { useAllProduct } from "@Hooks/useProduct";
import Head from "next/head";
import React from "react";
import AppLayout from "../components/Layout/AppLayout";

export function Home() {
  const{data:topProducts} =useAllProduct()
  console.log(topProducts)
 
  return (
     <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
    <div className="pt-10 container">
       <section className="lg:grid lg:grid-cols-5 p-7 gap-8 sm:border rounded relative fakeLoader">
         <div className="hidden lg:block">
         <SidebarCategories/>
         </div>
         <BannerCarousel/>
       </section>
       <CategoriesCard/>

     

       {/**---------Latest Product------------ */}

       <section className="py-5 flex flex-col gap-7">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">Latest Product</h2>
          <div className=" border border-gray-200 rounded sm:p-5 p-2">
              <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-6 gap-2 divide-y">
                {topProducts? topProducts.docs.map((pro) => (
                  <div key={pro._id} >
                    <MinProductCard productData={pro} />
                  </div>
                )): null}
              </div>
            </div>
       </section>
       {/**---------Latest Product------------ */}

    </div>
    </React.Fragment>
  );
}

Home.layout = AppLayout
export default Home

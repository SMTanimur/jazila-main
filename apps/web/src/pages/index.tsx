import BannerCarousel from "@components/Home/BannerCarousel";
import CategoriesCard from "@components/Home/CategoriesCard";
import SidebarCategories from "@components/Layout/SideBar/SideBarCategories";
import Tag from "@components/Layout/SideBar/Tag";
import Head from "next/head";
import React from "react";
import AppLayout from "../components/Layout/AppLayout";

export function Home() {
 
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

       {/*-----Section of miniProduct and popular #tag------- */}
       <section className="lg:grid lg:grid-cols-4 gap-8 overflow-hidden">
         <div className="hidden lg:block">
          <div>
            <a className=" font-bold border-b-2 border-pink-500 inline-block pb-1">
              POPULAR TAG
            </a>
          </div>
          <Tag/>
         </div>
       </section>

    </div>
    </React.Fragment>
  );
}

Home.layout = AppLayout
export default Home

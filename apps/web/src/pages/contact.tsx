import AppLayout from '@components/Layout/AppLayout'
import Breadcrumb from '@services/Breadcrumb'
import React from 'react'
import ContactForm from '../components/Contact/ContactForm'
import SocialItem from '../components/Contact/SocialItem'

import { countItemList } from '../data/ContactData'


function contact() {
  return (
    <div>
      <Breadcrumb/>

      <section className="xl:px-24 sm:px-10 px-4 pt-5">
        {/* ------map-------- */}
        <div className=" h-screen">
          <div className=" mb-8">
            <h3 className=" font-bold leading-loose text-2xl border-b-2 border-yellow-500 inline-block">
              FOLLOW ME ON MAP
            </h3>
          </div>
          <iframe
            className=" w-full h-4/5"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6214.81756165847!2d-100.97926321868432!3d22.150645181180668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842aa201fc90fffb%3A0x318299fedfad4ff6!2sCentro%20Historico%2C%2078000%20San%20Luis%20Potos%C3%AD%2C%20San%20Luis%20Potosi%2C%20Mexico!5e0!3m2!1sen!2sbd!4v1626243463377!5m2!1sen!2sbd"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>

        <div className=" grid sm:grid-cols-3 gap-20">
          <div className=" col-span-2">
            <div className=" mb-8">
              <h3 className=" font-bold leading-loose text-2xl border-b-2 border-yellow-500 inline-block">
                SEND ME A MESSAGE
              </h3>
            </div>

            <ContactForm></ContactForm>
          </div>

          <div className="">
            <div className=" mb-8">
              <h3 className=" font-bold leading-loose text-2xl border-b-2 border-yellow-500 inline-block">
                CONTACT US
              </h3>
            </div>

            <div>
              <ul>
                {countItemList.map((item) => (
                  <li key={item.title} className=" text-gray-500 mb-4">
                    <a>
                      <span className=" inline-block">{item.icon}</span>
                      <span className=" ml-3">{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ------Share--------- 
            
             */}

            <div className=" flex items-center mt-10">
              <SocialItem></SocialItem>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
contact.layout = AppLayout
export default contact

import React from 'react'
import { Navigation, Pagination, Autoplay, EffectFade, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import Image from 'next/image'

export default function BannerCarousel() {
  return (
    <div className="col-span-4 overflow-hidden">
      <div className="">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y, EffectFade]}
          effect={'fade'}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <div>
              <Image
                className=" rounded"
                alt=""
                src="/images/slide1-850x392.webp"
                layout="responsive"
                width={500}
                height={240}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className=" rounded "
                alt=""
                src="/images/slide2-850x392.webp"
                layout="responsive"
                width={500}
                height={240}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className=" rounded "
                alt=""
                src="/images/slide3-850x392.webp"
                layout="responsive"
                width={500}
                height={240}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}


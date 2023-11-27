import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Parallax } from "swiper";
import Image from 'next/image';

const Ads = () => {
  return (
    <div>
      <div className='m-auto -z-0 lg:w-4/6 w-full py-10'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          parallax={true}
          modules={[Pagination, Autoplay, Parallax]}
        >
          <SwiperSlide>
            <Image
              src="/ads/ad1.png"
              width={1200}
              height={400}
              alt="Ad1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/ads/ad2.png"
              width={1200}
              height={400}
              alt="Ad1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/ads/ad3.png"
              width={1200}
              height={400}
              alt="Ad1"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Ads

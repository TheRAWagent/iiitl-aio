import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Parallax } from "swiper";


const Reviwes = ({ data }) => {
    
    return (
        <div className='px-10 py-10 m-auto lg:w-4/6 w-full'>

            <div className='hidden lg:block'>
                <Swiper
                    slidesPerView={2}
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
                    {
                        data?.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div key={index} className='py-2 px-8 hover:scale-105 transition-all duration-500 cursor-pointer'>
                                        <h1 className='px-4 text-xl font-medium'>{item.customer_name}</h1>
                                        <h2 className='px-4 opacity-60 py-2'>{item.date}</h2>
                                        <p className='py-6 px-4 my-4 rounded-xl border-[#aaebff]  border-[1px] bg-[#f1faff]'>{item.review}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

            <div className='block lg:hidden'>
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
                    {
                        data?.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className='py-2 px-8 hover:scale-105 transition-all duration-500 cursor-pointer'>
                                        <h1 className='px-4 text-xl font-medium'>{item.customer_name}</h1>
                                        <h2 className='px-4 opacity-60 py-2'>{item.date}</h2>
                                        <p className='py-6 px-4 my-4 rounded-xl border-[#aaffd3]  border-[1px] bg-[#f1fff8]'>{item.review}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

        </div>
    )
}

export default Reviwes

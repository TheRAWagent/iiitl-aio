import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Parallax } from "swiper";
import Productcard from './atoms/Productcard';
import { useRouter } from 'next/router'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const RelatedProducts = ({ data, category }) => {
    const router = useRouter()
    const { categoryid } = router.query
    const client = createClient({
        projectId: "a253bg6b",
        dataset: "production",
        useCdn: false,
    });
    const builder = imageUrlBuilder(client);
    function urlFor(source) {
        return builder.image(source);
    }
    return (
        <div className='my-10'>

            <div className='hidden md:block lg:block'>
            <h3 className='py-8 text-2xl font-medium'>Realted  Product</h3>
                <Swiper
                    slidesPerView={3}
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
                            if (item.cat._ref == category) {
                                return (
                                    <SwiperSlide key={index}>
                                        <Productcard id={item._id} name={item.name} image={urlFor(item.picture[0]).url()} price={item.price} />
                                    </SwiperSlide>
                                )
                            }
                        })
                    }

                </Swiper>
            </div>

            <div className='lg:hidden md:hidden block'>
            <h3 className='py-8 text-2xl font-medium'>Realted  Product</h3>
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
                            if (item.cat._ref == category) {
                                return (
                                    <SwiperSlide key={index}>
                                        <Productcard id={item._id} name={item.name} image={urlFor(item.picture[0]).url()} price={item.price} />
                                    </SwiperSlide>
                                )
                            }
                        })
                    }

                </Swiper>
            </div>
        </div>
    )
}

export default RelatedProducts

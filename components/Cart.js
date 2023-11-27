import React, { useEffect, useState } from 'react'
import Button from './atoms/Button'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"
import { motion } from 'framer-motion';
import client from '@/sanity/client';
import { urlFor } from '@/sanity/client';
import Link from 'next/link';
const cart = ({ opencart, setOpenCart, products }) => {

    const [orders, setOrder] = useState([])
    const [totalsum, setSum] = useState(0)
    
    useEffect(() => {
      
        const func=()=>{
            var order = JSON.parse(localStorage.getItem('orders'));
            var sum=JSON.parse(localStorage.getItem('sum'));
            if(sum===null || sum==undefined || sum==NaN){
                sum=0;
                setSum(0)
            }
            sum=parseInt(sum)
            setSum(sum)
            setOrder(order)
          
        }

        setInterval(func, 3000);

    },[])

  

    const remove=(productid,price)=>{
        var order=JSON.parse(localStorage.getItem('orders'));
        var sum=JSON.parse(localStorage.getItem('sum'));
        if(sum==null)sum=0;
        sum=sum-parseFloat(price)
        setSum(sum)
        localStorage.setItem("sum", JSON.stringify(sum));
        if(order==null){order=[]}
        var neworder=[];
        order.map((item)=>{
            if(item!=productid){
                neworder.push(item)
            }
        })
        localStorage.setItem("orders", JSON.stringify(neworder));
        setOrder(neworder)
    }

    return (
        <div >
        {
         !opencart?<div></div>
        :
        <motion.div  className={' transition-all duration-300 flex w-screen '}>
           <motion.div  initial={{ x:1000 }} exit={{ x: 1000 }} animate={{ x:0 }}  className='w-2/3 hidden  h-screen opacity-60 lg:fixed  bg-white z-50'></motion.div>
           
            <motion.div initial={{ scale: 0 }} exit={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 100, duration: 0, scale: 2 }} className='z-50 px-7  py-5 shadow-2xl transition-all duration-300  h-screen bg-white lg:w-1/3 w-full  right-0 fixed flex flex-col justify-between'>

                <div>
                    <div className='flex justify-between'>
                        <button onClick={(e) => { setOpenCart(!opencart) }} >
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-[#0E2954]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div></div>
                    </div>
                    <motion.div initial={{ x: -100 }} exit={{ scale: 0 }} animate={{ x:0 }} transition={{ type: "spring", stiffness: 100, duration: 0.6, delay: 0.1, scale: 2 }} className='my-5 overflow-y-auto overflow-x-hidden h-[520px] mx-2'>
                        {
                            products.map((item, index) => {
                                if (orders!=null && orders.length!=0 && orders.includes(item._id)) {
                                    return (
                                        <motion.div initial={{ scale: 0 }} exit={{ scale: 0 }} animate={{ scale:1}} transition={{ type: "spring", stiffness: 100, duration: 0.6, delay: 0.2, scale: 2 }} className='my-2 py-2 border-[1px] hover:scale-105 duration-500 transition-all cursor-pointer'>
                                        <Link href={'/product/'+item._id}>
                                        <div className='hover:scale-105 duration-500 transition-all'>
                                            <button onClick={()=>{remove(item._id,item.price)}}  className='float-right mx-2'>
                                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6  h-6 text-[#3fb5eb]">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                            <div></div>
                                            <div className='  flex  px-3 '>
                                                <img className='w-28 h-28  m-auto mx-4' src={urlFor(item.picture[0]).url()} alt="" />
                                                <div>
                                                    {
                                                        item.name.lenght > 20 ?
                                                            <h3 className='text-xl py-2'>{item.name}</h3>
                                                            :
                                                            <h3 className='text-xl py-2'>{item.name.substring(0, 40) + '...'}</h3>
                                                    }
                                                    <h6 className='text-lg flex justify-between '>&#8377;{item.price}  </h6>

                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                        </motion.div>
                                    )
                                }
                            })
                        }
                    </motion.div>


                </div>



                <div className=''>
                    <hr className='my-4' />
                    <div className='grid grid-flow-row grid-cols-1'>
                        <div className='flex justify-between px-3 py-8'>
                            <h2 className='text-xl '>Subtotal amount</h2>
                            <h4 className='text-xl'>&#8377;{totalsum}</h4>
                        </div>
                        <Link href='/checkout'>
                        <Button text={'Checkout'} className="text-center w-full" />
                        </Link>
                    </div>
                </div>

            </motion.div>
        </motion.div>

         }
        </div>
    )
}

export default cart

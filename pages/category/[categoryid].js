import React, { useEffect,useState } from 'react'
import Layout from '@/components/Layout'
import { urlFor } from '@/sanity/client';
import {  motion } from 'framer-motion'
import { useRouter } from 'next/router'
import client from '@/sanity/client';
import Productcard from '@/components/atoms/Productcard';
import Preloader from '@/components/atoms/Preloader';


const categoryid = ({products}) => {
    const [loading, setLoading] = useState(false)
    const delay = 1.1;
    const router = useRouter()
    const { categoryid } = router.query
    useEffect(
      () => {
        setLoading(false);
        setTimeout(() => {
          setLoading(true)
        }, delay * 1000);
      },  
      []
    );
   
  return loading ? (
    <motion.div initial={{ scale: 0 }} exit={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 100, duration: 0.6, delay: 0.1, scale: 2 }}>
    <Layout products={products}>
    <motion.div initial={{ scale: 0 }} exit={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 100, duration: 0.6, delay: 0.1, scale: 2 }} className='m-auto w-full lg:w-4/6 py-10 grid grid-flow-row grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-5 gap-x-4 gap-y-4'>
     {
      products?.map((item,index)=>{
        if(item.cat._ref==categoryid){
          return(
            <div key={index}>
            <Productcard id={item._id} name={item.name} image={urlFor(item.picture[0]).url()} price={item.price}/>
            </div>
            )
          }
        })
      }
      </motion.div>
      </Layout>
   </motion.div>
  ):<Preloader/>
}

export async function getServerSideProps(context) {
    const query = `*[_type == "product"]`;
    const products = await client.fetch(query);
    return {
      props: {
       products,
      },
    };
}

export default categoryid


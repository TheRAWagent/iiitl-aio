import Layout from '@/components/Layout'
import Reviwes from '@/components/atoms/Reviwes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import client from '@/sanity/client';
import { urlFor } from '@/sanity/client';
import Ads from '@/components/atoms/Ads';
import Preloader from '@/components/atoms/Preloader';
import Image from 'next/image';

export default function Home({ product, categories, customer_reviwes }) {
  const [loading, setLoading] = useState(false)
  const delay = 1.1;
  useEffect(
    () => {
     
    
      setLoading(false);
      setTimeout(() => {
        setLoading(true)
      }, delay * 1000);
    },  
    []
  );
 
  return loading? (
    <motion.div initial={{ scale: 0 }} exit={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 100, duration: 0.6, delay: 0.1, scale: 2 }} >
      <Layout products={product} >
        {
          <motion.div initial={{ scale: 0 }} exit={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 100, duration: 0.6, delay: 0.1, scale: 2 }}>
           
            <Ads/>
            <Reviwes data={customer_reviwes} />

            <div className='m-auto w-full lg:w-4/6 py-10 grid grid-flow-row grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-5 gap-x-4 gap-y-4'>
              {
                categories?.map((item, indes) => {
                  return (
                    <Link href={'/category/' + item._id} key={indes}>
                      <div className='flex px-4 py-2 rounded-xl hover:text-[#0E2954] hover:shadow-[#0E2954] shadow-lg border-[1px] border-black border-opacity-40 items-center '>
                        <Image height={70} width={70} src={urlFor(item.picture).url()} alt="Categroy Image" />
                        <h1 className='px-4 font-medium'>{item.name}</h1>
                      </div>
                    </Link>
                  )
                })
              }
            </div>
          </motion.div>}
      </Layout>
    </motion.div>
  ):(<Preloader/>)

}
export async function getStaticProps(context) {
  const query3 = `*[_type == "product"]`;
  const query = `*[_type == "category"]`;
  const query2 = `*[_type == "customer_reviwes"]`;
  const product = await client.fetch(query3);
  const categories = await client.fetch(query);
  const customer_reviwes = await client.fetch(query2);
  return {
    props: {
      product,
      categories,
      customer_reviwes,
    },
  };
}

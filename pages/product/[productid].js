import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ReactStars from 'react-stars'
import RelatedProducts from '@/components/RelatedProducts';
import Button from '@/components/atoms/Button';
import { motion } from 'framer-motion'
import client from '@/sanity/client';
import { urlFor } from '@/sanity/client';
import { checkProduct,addProduct,removeProduct } from '@/localstorage/functions';
import Preloader from '@/components/atoms/Preloader';

const productid = ({ product }) => {
    const router = useRouter()
    const { productid } = router.query
    
    const [load, setLoad] = useState(true)
    const [alreadyin, setalreadyin] = useState(false)

    const [selected,setSelected]=useState(0)

    const addorder = (price) => {
        if(checkProduct(product)){
            setalreadyin(true)
            setLoad(!load)
             return
        }
        addProduct(productid,price)
    }
    const [loading, setLoading] = useState(false)
    const delay = 1.1;
    useEffect(() => {

        const func = () => {
            if (checkProduct(productid)) {
                setalreadyin(true)
                setLoad(!load)
            }
            else{
                setalreadyin(false)
                setLoad(!load)
            }
        }
        setInterval(func, 3000);
        setLoading(false);
        setTimeout(() => {
          setLoading(true)
        }, delay * 1000);

    }, [])

    const remove = (price) => {
       removeProduct(productid,price)
       setalreadyin(false)
       setLoad(!load)
    }
    return loading ?(
        <motion.div initial={{ scale: 0 }} exit={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 100, duration: 0.6, delay: 0.1, scale: 2 }}>
        <Layout products={product}>
            <motion.div initial={{ scale: 0 }} exit={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 100, duration: 0.6, delay: 0.1, scale: 2 }} className='px-10 lg:w-2/3 w-full m-auto'>
                {
                    product?.map((item, ind) => {
                        if (item._id == productid) {
                            return (
                                <div key={ind} className="py-10" >
                                    <div className=' block gap-x-20'>
                                        <div className='min-h-80'>
                                        {
                                            item.picture.map((it,index)=>{
                                                if(selected==index){
                                                    return(
                                                        <img className='w-80 h-80 my-4 m-auto' src={urlFor(item.picture[index]).url()} alt="" />
                                                    )
                                                }   
                                            })
                                        }
                                        </div>
                                         <div className='lg:flex grid grid-flow-row grid-cols-3 items-center justify-center my-10 '>
                                           {
                                            item.picture.map((it,index)=>{
                                                if(selected==index)
                                                {return(
                                                    <div onClick={()=>{setSelected(index)}}  className='mx-3 py-1 px-2 border-[1px] border-black rounded-md'>
                                                    <img className='w-20  cursor-pointer  h-16 my-4 m-auto' src={urlFor(item.picture[index]).url()} alt="" />
                                                    </div>
                                                )}
                                                return(
                                                    <div onClick={()=>{setSelected(index)}} className='mx-3 py-1 px-2 border-[1px] border-white rounded-md'>
                                                    <img className='w-20 h-16 cursor-pointer   my-4 m-auto' src={urlFor(item.picture[index]).url()} alt="" />
                                                    </div>
                                                )
                                            })
                                           }
                                         </div>
                                        <div>
                                            <h1 className='text-3xl'>{item.name}</h1>
                                            <h2 className='my-2 font-light'>By {item.brand}</h2>
                                            <span className='flex items-center '>
                                                <ReactStars count={5} value={item.rating} size={24} color2={'#ffd700'} />
                                                <span className='mx-3'>
                                                    {item.rating}+ rating
                                                </span>
                                            </span>
                                            <h2 className='my-2 text-xl'>MRP &#8377;{item.price}</h2>
                                            <h4 className='text-sm'>Inclusive of all taxes</h4>
                                            {
                                                alreadyin ?
                                                    <div  onClick={()=>{remove(item.price)}}>
                                                        <Button text={"Remove from Cart"} className="my-2" />
                                                    </div>
                                                    :
                                                    <div onClick={() => { addorder(item.price) }}>
                                                        <Button text={"Add to cart"} className="my-2" />
                                                    </div>
                                            }
                                        </div>
                                    </div>

                                    <div className='py-10'>
                                        <h3 className='py-4 text-2xl font-medium'>Description</h3>
                                        <h5 className='font-light '>
                                            {item.description}
                                        </h5>
                                    </div>
                                    <div>
                                        <h3 className='py-4 text-2xl font-medium'>Ingredients</h3>
                                        <h5 className='font-light '>
                                            {item.ingredients}
                                        </h5>
                                    </div>
                                    <div>
                                        <h3 className='py-4 text-2xl font-medium'>Benefits</h3>
                                        <h5 className='font-light '>
                                            {item.benefits}
                                        </h5>
                                    </div>
                                    <hr className='my-3' />
                                    <RelatedProducts data={product} category={item.cat._ref} />
                                </div>
                            )
                        }
                    })
                }
            </motion.div>
        </Layout>
        </motion.div>
    ):
     <Preloader/>
}
export async function getServerSideProps(context) {
   
    const query = `*[_type == "product" ]`;
    const product = await client.fetch(query);
    return {
        props: {
            product,
        },
    };
}

export default productid

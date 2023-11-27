import React from 'react'
import Link from 'next/link'
import Button from './Button'
import { urlFor } from '@/sanity/client';

const ProductChecout = ({product,orders,totalsum,progrsspercent,setProgressPercent,setSum,setOrder}) => {
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
    <div className='py-10 w-5/6 m-auto items-center '>
    <h1 className='text-xl text-center my-4'>Order Summary</h1>
    {
        product.map((item, index) => {
            if (orders != null && orders.length != 0 && orders.includes(item._id)) {
                return (
                    <div key={index} className="lg:flex block m-auto border-[1px] border-black py-4 cursor-pointer my-4 hover:scale-105 duration-500 transition-all sm:px-0 shadow-lg lg:px-10 border-opacity-20  justify-start">
                        <button onClick={() => { remove(item._id, item.price) }} className='float-right mr-10'>
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6  h-6 text-[#3fb5eb]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <img className='w-36 h-36 m-auto' src={urlFor(item.picture[0]).url()} alt="" />
                        <div className=' px-10'>
                            <h5 className='text-2xl mt-4'>
                                {item.name}
                            </h5>
                            <h5 className='text-xl my-2'>
                                &#8377;{item.price}
                            </h5>
                        </div>
                    </div>
                )
            }
        })
    }
    <div>
        <hr />
        <div className='flex justify-between'>
            <div></div>
            <div>
                <h6 className='text-sm my-3'>Subtotal</h6>
                <h5 className='text-xl my-1'> &#8377; {totalsum}</h5>
            </div>
        </div>
        <div className='flex my-2 justify-between'>
            <Link href={'/'}>
                <Button text={"Go back"} />
            </Link>
            <div onClick={()=>setProgressPercent(50)} >
                <Button text={"Next"} />
            </div>
        </div>
    </div>
</div>
  )
}

export default ProductChecout

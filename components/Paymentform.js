import React, { useEffect, useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Button from './atoms/Button';
import client from '@/sanity/client';
import { urlFor } from '@/sanity/client';
const initialOptions = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
  currency: "USD",
  intent: "capture",
};
const erroroccured = (error) => {
  console.log(error)
}




const Paymentform = ({ progrsspercent, setProgressPercent,firstName,orders,product,totalsum
  ,lastName,phoneNumber,address,state,city,zip
 }) => {
  console.log(firstName)
  return (
    <div>
    <h1 className='text-xl text-center my-10'>Billing Details</h1>
     <div className='m-auto   grid grid-flow-row sm:grid-cols-1 lg:grid-cols-2  gap-x-8  '>
         <div className='gap-y-2  px-4'>
          {
            product.map((item,ind)=>{
              if (orders != null && orders.length != 0 && orders.includes(item._id)){
                return(
                  <div className='flex justify-start mt-8  hover:scale-105 duration-500 transition-all shadow-lg '>
                  <img className='w-36 h-36 ' src={urlFor(item.picture[0]).url()} alt="" />
                  <div className='pl-5'>
                  <h5 className="text-xl tracking-tight text-slate">{item.name}</h5>
                  <span className="text-xl font-bold text-slate-900">&#8377;{item.price}</span>
                  </div>
                  </div>
                )
              }
            })
          }
          <div className='flex justify-between'>
          <div className='px-2 py-1'>
          <h6 className='text-sm my-3'>Subtotal</h6>
          <h5 className='text-xl my-1 '> &#8377; {totalsum}</h5>
          </div>
          <div></div>
        </div>
         </div>
         <div className='lg:px-0 px-10 '>
          <div className='mt-8'>
          <htmlForm className="w-full m-auto ">
          <div className="flex flex-wrap -mx-3  mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                      First Name
                  </label>
                  <input value={firstName} readOnly className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                      Last Name
                  </label>
                  <input value={lastName}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
              </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                      Phone Number
                  </label>
                  <input value={phoneNumber}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="902XXXXXXX" />
                  
              </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                      Address
                  </label>
                  <input value={address}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="address" placeholder="Appartment 7,street 15" />
              </div>
          </div>
          <div className="flex flex-wrap -mx-3  mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                      State
                  </label>
                  <input value={state} readOnly className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Rajasthan" />
              </div>
              <div className="w-full md:w-1/3 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                      City
                  </label>
                  <input value={city}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Jaipur" />
              </div>
              <div className="w-full md:w-1/3 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                      Pin code
                  </label>
                  <input value={zip}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="9xxx9" />
              </div>
          </div>
          </htmlForm>
          </div>
         <div className='w-full px-10 lg:px-0  m-auto'>
         <PayPalScriptProvider options={initialOptions} >
         <PayPalButtons onError={erroroccured} />
         </PayPalScriptProvider>
         </div>
         </div>
     </div>


      <div className='flex px-10 lg:px-0 my-2 justify-between'>
        <div onClick={() => setProgressPercent(50)}>
          <Button text={"Go back"} />
        </div>
        <div> </div>
      </div>
      
    </div>
  )
}

export default Paymentform

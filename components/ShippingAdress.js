import React, { useState } from 'react'
import { Country, State, City } from 'country-state-city';
import Button from './atoms/Button';
import Link from 'next/link';

const ShippingAdress = ({progrsspercent, setProgressPercent,setfirstName,
    setLastName,setshipState,setadress,setZip,setcity,lastName,firstName,
    phoneNumber,address,zip,setPhoneNumber
}) => {
    const [stateIso, setStateIso] = useState('AN');
    const [cities, setcities] = useState(City.getCitiesOfState('IN', 'AN'))
    const setState = (e) => {
        setcities(City.getCitiesOfState('IN', e.target.value))
    }
  
    return (
        <div> 
        
        {   progrsspercent?

            <div className='m-auto -z-0  w-full px-10  min-h-[600px] py-10'>
            <h1 className='text-xl text-center my-10'>Shippping Information</h1>
                <htmlForm className="w-full m-auto ">
                    <div className="flex flex-wrap -mx-3  mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input value={firstName} onChange={(e)=>{setfirstName(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input value={lastName} onChange={(e)=>{setLastName(e.target.value)}}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Phone Number
                            </label>
                            <input value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="902XXXXXXX" />
                            <p className="text-gray-600 text-xs italic">Should be of 10 digits</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Address
                            </label>
                            <input value={address} onChange={(e)=>{setadress(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="address" placeholder="Appartment 7,street 15" />
                           
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">

                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                State
                            </label>
                            <div className="relative">
                                <select onChange={(e) => { setState(e) 
                                    setshipState(e.target.name)
                                }} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    {
                                        State.getStatesOfCountry('IN').map((item) => {
                                            return (
                                                <option value={item.isoCode}  >
                                                    {item.name}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                City
                            </label>
                            <div className="relative">
                                <select onChange={(e) => { setStateIso(e.target.value)
                                    setcity(e.target.name)
                                 }} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    {
                                        cities.map((item) => {
                                            return (
                                                <option value={item.isoCode}  >
                                                    {item.name}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                Zip
                            </label>
                            <input value={zip} onChange={(e)=>{setZip(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                        </div>
                    </div>
                </htmlForm>
                <div className='flex my-2 justify-between'>
                <div onClick={()=>setProgressPercent(0)} >
                    <Button text={"Go back"} />
                </div>
                <div onClick={()=>setProgressPercent(100)} >
                    <Button text={"Next"} />
                </div>
            </div>
            </div>:<div></div>

                                }
        </div>
    )
}

export default ShippingAdress

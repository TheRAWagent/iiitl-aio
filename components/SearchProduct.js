import React, { useEffect } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import { useRouter } from 'next/router'
const SearchProduct = ({data}) => {

    const client = createClient({
        projectId: "a253bg6b",
        dataset: "production",
        useCdn: false,
      });
      const builder = imageUrlBuilder(client);
      function urlFor(source) {
        return builder.image(source);
      }         


      const router = useRouter()
      const handleOnSearch = (string, results) => {}
      const handleOnHover = (result) => {}
      const handleOnSelect = (item) => {
        router.push('/product/'+item._id)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }
    
      const formatResult = (item) => {
        return (
          <div className='z-50 cursor-pointer  flex justify-start items-center'>
            
          <img className='w-20 h-20 m-auto' src={urlFor(item.picture[0]).url()} alt="" />
          <h6 className='z-50 mx-2' >{item.name}</h6>
          </div>
        )
      }    
  return (
    <div>
    <div  className="w-[400px] z-50">
    <ReactSearchAutocomplete
      items={data}
      onSearch={handleOnSearch}
      onHover={handleOnHover}
      onSelect={handleOnSelect}
      onFocus={handleOnFocus}
      autoFocus
      showIcon={true}
      maxResults={5}
      placeholder={"Search Products"}
      className='z-40'
      formatResult={formatResult}
    />
  </div>
    </div>
  )
}

export default SearchProduct

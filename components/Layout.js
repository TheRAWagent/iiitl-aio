import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Seo from './Seo'
import dynamic from 'next/dynamic'
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});




const Layout = ({ children, products }) => {

  return (
    <div className='max-w-[2000px] m-auto'>
      <Seo />
      <div className='absolute'>
      </div>
      <div className='min-h-screen bg-white flex flex-col justify-between'>
        <Header products={products} />
        <AnimatedCursor
        outerAlpha={1}
        innerScale={0.7}
        outerScale={5}
        hasBlendMode={true}
        color='14, 41, 84'
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
        {
          children
        }
        <Footer />
      </div>
    </div>
  )
}


export default Layout

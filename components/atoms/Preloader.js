import React from 'react'
import Seo from '../Seo'
import { AnimatePresence, motion } from 'framer-motion'
const Preloader = () => {
  return (
    <motion.div  initial={{ y: -600 }} animate={{ y: 0 }} transition={{ delay: 0 }} className='min-h-screen  flex items-center'>
    <Seo/>
     <img className='m-auto' src="https://ik.imagekit.io/cmef8hxb6/303_1__ufAkdsCKK.gif?updatedAt=1688585978869" alt="" />
    </motion.div>
  )
}

export default Preloader

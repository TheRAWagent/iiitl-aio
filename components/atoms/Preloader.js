import React from 'react'
import Seo from '../Seo'
import { AnimatePresence, motion } from 'framer-motion'
const Preloader = () => {
  return (
    <motion.div  initial={{ y: -600, x: 600 }} animate={{ y: 0 }} transition={{ delay: 0 }} className='min-h-screen  flex items-center'>
    <Seo/>
    <iframe src="https://giphy.com/embed/fefXhtGG2NeynEUHtU" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </motion.div>
    )
  }
  export default Preloader

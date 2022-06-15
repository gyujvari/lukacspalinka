import React from 'react';
import '../../App.css';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'


export default function Services() {
  return <motion.div  initial={{opacity:0}} animate={{ opacity:  1 }} transition={{duration:1}} className='services'>
    <motion.div className="google-map-code">
      <div className='contact'>
        <div>Tel: 0740-882-014</div>
        <div>Email: lukacspalinka@yahoo.com</div>
        <div>Cím: Csekefalva 5/B</div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11023.169595212714!2d25.011985340066143!3d46.31396031592118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474b0f3fb2304445%3A0x7782b88eafa8df25!2sDistilerie%20Cechesti-Csekefalvi%20P%C3%A1linkaf%C5%91zde!5e0!3m2!1shu!2sro!4v1651572282531!5m2!1shu!2sro"  width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </motion.div>
</motion.div>;
}

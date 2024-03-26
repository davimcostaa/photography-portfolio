import React from 'react';

import WomanImg from '../img/home/woman.png';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { transition1 } from '../transitions';

const Home = () => {
  return (
  <motion.section 
      initial={{opacity: 0 }} 
      animate={{opacity: 1}} 
      exit={{opacity: 0}}
      transition={transition1}
      className='section overflow-y-scroll overflow-x-hidden' >
    <div>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col justify-center'>
              <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 
                lg:w-auto z-10 lg:absolute flex 
              flex-col justify-center items-center lg:items-start'>
                <h1 className='h1'>photographer <br /> & film maker</h1>
                <p className='text-[26px] lg: lg:text-[36px] font-primary mb-4 lg:mb-12'>Los Angeles, USA</p>
                <Link to='/contact' className='btn mb-[30px]'>hire me</Link>
              </div>
              <div className='flex justify-end lg:max-h-max'>
                <div className='relative lg:-right-40 overflow-hidden'>
                  <img src={WomanImg} alt='' />
                </div>
              </div>
        </div>
      </div>
    </div>
  </motion.section >);
};

export default Home;

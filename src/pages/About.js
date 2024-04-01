import React, { useContext } from 'react';

import WomanImg from '../img/about/woman.png';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';

const About = () => {

  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return <motion.section
    initial={{opacity: 0, y: '100%'}} 
    animate={{opacity: 1, y: 0}} 
    exit={{opacity: 0, y: '100%'}}
    transition={transition1}
    className='section  overflow-y-auto overflow-x-hidden'>
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className='container mx-auto h-full relative'>
        <div className='flex flex-col 
            lg:flex-row h-full items-center justify-center 
            gap-x-24 text-center lg:text-left lg:pt-16'>
          <div className='flex-1 max-h-96 lg:max-h-max 
          order-2 lg:order-none '>
            <img src={WomanImg} alt=''></img>
          </div>
          <motion.div 
              initial={{opacity: 0, y: '-80%'}} 
              animate={{opacity: 1, y: 0}} 
              exit={{opacity: 0, y: '-80%'}}
              transition={transition1}
              className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center
              items-center lg:items-start mx-7
          '>
            <h1 className='h1'>About me</h1>
            <p className='mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque augue odio, fermentum vel venenatis quis, sollicitudin quis purus.
      
            <br />
            <br /> 
            Nulla aliquam ultrices ligula id posuere. <b>Suspendisse dolor nibh.</b>Lorem ipsum dolor sit
          
            <br />
             amet, consectetur adipiscing elit. 
            </p>

            <Link to='/portfolio' className='btn'>View my work</Link>
          </motion.div>
        </div>
    </div>
  </motion.section>;
};

export default About;

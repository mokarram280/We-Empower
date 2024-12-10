import { Button } from '@mui/material';
import React from 'react';
import { GoArrowRight } from "react-icons/go";

function About() {
  return (
    <section className='py-8 md:py-16 px-10 md:px-20 mb-0 md:mb-16 relative'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
            <div>
            <div className='space-y-2'>
               <h4 className='text-sm text-[#F44335]'>ABOUT US</h4>
               <h3 className='text-lg md:text-2xl lg:text-3xl font-semibold'>Our Mission</h3>
            </div>
                <p className='text-sm mt-4 md:mt-16 max-w-80'>To create a personalised  pathway for continuous learning and transferrable skills development.</p>
            <div className=' mt-8 md:mt-32'>
               <Button sx={{color:'#F44335',border:'2px solid red',borderRadius:'25px',fontWeight:'bold',fontSize:'14px'}} endIcon={<GoArrowRight size={15} />}>Find out more</Button>
            </div>
            </div>
            <div className='mt-8 md:mt-0'>
                <img src="/Group 238902.png" alt="" />
            </div>
        </div>

        <div className='flex flex-col-reverse md:flex-row items-center justify-between mt-20 md:mt-32'>
            <div className='mt-8 md:mt-0'>
                <img src="/Right.png" alt="" />
            </div>
            <div>
            <div className='space-y-2'>
               <h4 className='text-sm text-[#F44335]'>ABOUT US</h4>
               <h3 className='text-lg md:text-2xl lg:text-3xl font-semibold'>Our Vision</h3>
            </div>
                <p className='text-sm mt-4 md:mt-16 max-w-80'>To have a globally recognised strategic bridge between education and the job market</p>
            <div className='mt-8 md:mt-32'>
               <Button sx={{color:'#F44335',border:'2px solid red',borderRadius:'25px',fontWeight:'bold',fontSize:'14px'}} endIcon={<GoArrowRight size={15} />}>Contact us</Button>
            </div>
            </div>
        </div>
        <div className='absolute top-0 right-1/2 hidden lg:flex'>
            <img src="/Line and circle content.png" alt="" />
        </div>
    </section>
  )
}

export default About;
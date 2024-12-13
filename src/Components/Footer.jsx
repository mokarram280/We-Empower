import React from 'react';
const listA = ['Collaborations','Statistics','How It Works','Testimonials'];
const listB = ['Who We Are','Mission statement','Our Vision','The Team'];
const listC = ['It Support','Project Managment','Data Analysts','Ux Design'];
const listD = ['Your message','Email','Phone number','Linkedin'];

const linkList = (title,list) => (
   <div className='space-y-4 min-w-fit'>
       <h5 className='font-bold'>{title}</h5>
       <ul className='space-y-2'>
          {list.map((item,i)=>(
              <li key={i} className='text-gray-500 text-sm'>{item}</li>
            ))}
       </ul>
   </div>
);

function Footer() {
  return (
   <footer className='mt-16 px-20'>
      <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 items-center'>
        <div className='sm:col-span-2 space-y-4 ms-12'>
          <img src="/c4u full logo_2022 1.svg" alt="" className='w-28' />
          <p className='text-[#20484F] font-[300] max-w-32'>Level39 One Canada Square,Canary Wharf,London,E14 5AB</p>
        </div>
          {linkList('Home',listA)}
          {linkList('About Us',listB)}
          {linkList('Upskill',listC)}
          {linkList('Contact Us',listD)}
      </div>
      <div className='border border-gray-200 mt-12'></div>
      <p className='text-gray-500 text-center py-4'>Copyright 2022 Creatives For You LTD</p>
   </footer>
  )
}

export default Footer;
import React from 'react'

function Empower() {
    const Info = [
        {
            img:'/37.svg',
            title:'Students',
            text:'We help students find their way in a fast-evolving world by creating a personalised learning journey guaranteed to help stand out in a crowded job market.'
        },
        {
            img:'/50.svg',
            title:'Universities',
            text:'We help your emerging talent to unlock their full potential by combining education and work to create future-ready employees'
        },
        {
            img:'/16.svg',
            title:'Businesses',
            text:'We enable businesses to tap into the diverse pool of emerging talent cultivated by universities. To co-create the future workforce and revitalise the business world.'
        },
    ]
  return (
    <section className='py-8 md:py-16 px-6 md:px-20'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl text-gray-800 font-bold mb-8 md:mb-0'>At <span className='text-[#F44335] underline'>C4U</span>,<br /> We Empower: </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl cursor-pointer'>
                {
                    Info.map((item,i)=>(
                        <div key={i} className='bg-gray-900 py-6 px-4 rounded-lg text-white space-y-4 hover:shadow-xl hover:bg-[#F44335]/25 transition-all duration-300 hover:scale-105 group'>
                           <div className='space-y-1'>
                           <img className='bg-white group-hover:bg-gray-300 size-10 rounded-full p-2' src={item.img} alt="" />
                           <h3 className='text-md md:text-lg font-bold group-hover:text-gray-900'>{item.title}</h3>
                           </div>
                            <p className='text-sm md:text-md text-gray-400 group-hover:text-gray-900'>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Empower;
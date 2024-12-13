import React from 'react';

function Team() {
    const card = [
        {
            img:'/image 3.svg',
            names:'Ekta Mahajan',
            position:'Founder & C.E.O',
            icon1:'/Path.svg',
            icon2:'/Group 26608.svg',
            icon3:'/Group 26609.svg'
        },
        {
            img:'/image 4.svg',
            names:'Toby Potter-Drake',
            position:'Product Manager Associate',
            icon1:'/Path.svg',
            icon2:'/Group 26608.svg',
            icon3:'/Group 26609.svg'
        },
        {
            img:'/image 2.svg',
            names:'Ross Davies',
            position:'Corporate Growth Associate',
            icon1:'/Path.svg',
            icon2:'/Group 26608.svg',
            icon3:'/Group 26609.svg'
        },
        {
            img:'/image 1.svg',
            names:'Leo crozier ',
            position:'Software Developer',
            icon1:'/Path.svg',
            icon2:'/Group 26608.svg',
            icon3:'/Group 26609.svg'
        }
    ]
  return (
    <section className='py-8 md:py-16 px-10 md:px-20 relative'>
        <div className='relative'>
            <h3 className='text-2xl md:text-4xl lg:text-5xl font-semibold text-center md:text-start md:max-w-lg'>The Creative Team behind <span className='text-[#F44335]'>the door</span></h3>
            <div className='absolute top-4 md:top-6 right-0 md:left-1/3'>
                <img src="/Arrow_10.svg" alt="" />
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20'>
            {
                card.map((item,i)=>(
                    <div key={i} className='bg-white hover:bg-[#00FF84]/25 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center py-10 px-2 rounded-xl space-y-6 cursor-pointer'>
                        <img className='w-32' src={item.img} alt="" />
                        <h3 className='text-lg md:text-2xl lg:text-3xl font-bold'>{item.names}</h3>
                        <h4 className='text-md md:text-lg text-gray-400'>{item.position}</h4>
                        <div className='flex items-center justify-center gap-2'>
                        <img className='bg-[#00FF84]/10 w-7 h-7 rounded-full p-1' src={item.icon1} alt="" />
                        <img src={item.icon2} alt="" />
                        <img src={item.icon3} alt="" />
                        </div>
                    </div>
                ))}
        </div>
        <div className='absolute top-0 left-0 -z-10'>
            <img className='' src="/Rectangle 32.svg" alt="" />
        </div>
    </section>
  )
}

export default Team;
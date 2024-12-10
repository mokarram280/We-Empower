import React from 'react'

function Discover() {
    const Info = [
      {
        img:'/Frames.svg',
        title:'Disover', 
        text:'We uncover students unique skills to stand out in a crowded job market',
        number:'1.svg'
      },
      {
        img:'/Frame (1).svg',
        title:'Interact',
        text:'We open doors to new opportunities by expanding your transferrable skills',
        number:'2.svg'
      },
      {
        img:'/Frame (2).svg',
        title:'Engage',
        text:'To forester a skill focussed environment that enable students to navigate their ideal career',
        number:'3.svg'
      }
    ];

  return (
    <section className='py-16 px-10 md:px-20 bg-white'>
        <div className='flex flex-col md:flex-row items-center justify-between mt-8 md:mt-32 gap-16 md:gap-0'>
            {
              Info.map((items,i)=>(
                <div key={i} className='space-y-6 relative'>
                  <img className='w-10' src={items.img} alt="" />
                  <h3 className='text-md md:text-lg lg:text-xl font-bold'>{items.title}</h3>
                  <p className='text-sm text-gray-300 max-w-72'>{items.text}</p>
                  <div className='absolute -top-12 ms-36'>
                     <img className='' src={items.number} alt="" />
                  </div>
                </div>
              ))
            }
        </div>
    </section>
  )
}

export default Discover;
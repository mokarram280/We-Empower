import React from 'react';
import img from '/src/assets/edwin-andrade-4V1dC_eoCwg-unsplash 1.png'

function Home() {
  return (
    <section style={{backgroundImage:`url(${img})`}} className='bg-no-repeat bg-cover'>
        <div className='text-center py-10 md:py-20 px-6 md:px-12 space-y-8 w-full'>
            <h5 className='text-md md:text-lg lg:text-xl font-bold text-white'>Discover <span className='text-[#F44335]'>-</span> Interact <span className='text-[#F44335]'>-</span> Engage </h5>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-2xl mx-auto'>Connecting <span className='text-[#F44335] underline font-semibold'>talent</span> to opportunity through <span className='text-[#F44335] underline font-semibold'>skills</span></h1>
            <p className='text-sm md:text-md lg:text-xl text-gray-400 max-w-3xl mx-auto'>We forster a skill-focussed environment enabling students to navigate their career with their self-paced learning journey and businesses to gain market-ready talent.</p>
            <button className='bg-white px-5 py-2 font-semibold rounded-full text-[#F44335] hover:bg-[#F44335] hover:text-white transition-all duration-300 text-sm'>Ask questions</button>
        </div>
        <div>
          <img src="/Wave.svg" alt="" />
        </div>
    </section>
  )
}

export default Home;
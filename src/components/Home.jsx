import React from 'react'
import {BsArrowRightShort} from 'react-icons/bs'
import salman from '../assets/images/hero-img.png'



function Home() {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'> 

      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

        <div className='flex flex-col justify-center h-full'>

          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a Full Stack Developer
          </h2>

          <p className='text-gray-500 py-4 max-w-md'>
          I'm  a budding full-stack developer.I love to  work on web applications  using technologies like React,Tailwind,etc. This portfolio showcases my work in web development and programming. I'm eager to learn and grow in this field, and I'm excited to share my journey with you. Please take a look at my projects and feel free to get in touch for potential collaborations or opportunities."
          </p>

          <div>

            <button className= 'group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Protfolio
              <span className='group-hover:rotate-90 duration-300'>
                <BsArrowRightShort size={25}/>

              </span>
            </button>

          </div>

        </div>

        <div className=''>
          <img src={salman} alt="my profile "  className='rounded-2xl mx-auto w-2/3 md:w-full shadow-md shadow-blue-500  '/>


        </div>

      </div>

    </div>
  )
}

export default Home
import React from 'react'
import weather1 from '../assets/images/weather1.png'
import airbnb from '../assets/images/airbnb.png'
import finview from '../assets/images/finview.png'
import hostit from '../assets/images/hostit.png'
import netflix from '../assets/images/netflix.png'
import routerpractice from '../assets/images/routerpractice.png'
import signup from '../assets/images/sign-up.png'
import Travel from '../assets/images/Travel.png'
import twizza from '../assets/images/twizza.png'








function Work() {

    const myWorks=[
        {
            id:1,
            src:weather1,
            descripirtion:"A weather application using React and Tailwind (include Api calling)",


        },
        {
            id:2,
            src:airbnb,
            descripirtion:" airbnb website design  using React with figma",


        },
        {
            id:3,
            src:finview,
            descripirtion:" finview website using html custom css not responsive",


        },
        {
            id:4,
            src:hostit,
            descripirtion:" hostit web site full responsive using html and css (focus on media query)",


        },
        {
            id:5,
            src:netflix,
            descripirtion:"netflix website using react and tailwind ",


        },
        {
            id:6,
            src:routerpractice,
            descripirtion:" router practice in react (via:react-router-dom tutorial)",


        },
        {
            id:7,
            src:signup,
            descripirtion:"sign up form using react",


        },
        {
            id:8,
            src:Travel,
            descripirtion:"travel journel using react ",


        },
        {
            id:9,
            src:twizza,
            descripirtion:"twizza website using html and css",


        },
    ]



 

  return (
    <div className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full '>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>

                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>

                    My Works
                </p>
                <p className='py-6'>
                    
                    Check out some of my work right here.
                </p>

            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 justify-center'>
            {myWorks.map(({id,src,descripirtion}) => (


                <div key={id} className='shadow-md shadow-gray-600 rounded-lg  '>
                    <div className='flex  justify-center'>
                    <img src={src} alt="weather-app" className='rounded-[20px] duration-200 hover:scale-105 p-3 h-[200px] place-items-center'/>

                    </div>


                    <div className='flex items-center justify-center text-center m-2 font-semibold'>

                        <p>
                            {descripirtion}
                        </p>
                    
                    </div>
    

                <div className="flex items-center justify-center">
                <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105 border rounded-md'>Demo</button>
                <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105 border rounded-md'>  Code</button>
        
                </div>
                </div>
            ))}




            </div>




        </div>


    </div>
  )
}

export default Work
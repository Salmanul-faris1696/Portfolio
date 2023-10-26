import React from 'react'
import html from '../assets/images/html.webp'
import css from '../assets/images/css.webp'
import js from '../assets/images/js.webp'
import react from '../assets/images/react.webp'
import tailwind from '../assets/images/tailwind.webp'

function Expirence() {

    const tech =[

        {
            id:1,
            src:html,
            text:"HTML",
            style:"shadow-orange-500"
        },

        {
            id:2,
            src:css,
            text:"CSS",
            style:"shadow-blue-500"
        },
        {
            id:3,
            src:js,
            text:"JAVASCRIPT",
            style:"shadow-yellow-500"
        },
        {
            id:4,
            src:react,
            text:"REACT",
            style:"shadow-cyan-500"
        },
        {
            id:5,
            src:tailwind,
            text:"TAILWIND",
            style:"shadow-sky-500"
        },
    
    ]
  return (
    <div className='bg-gradient-to-b from-gray-800 to-black  w-full h-full '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white '> 

            <div className='mt-20'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>

                <p className='py-6'>These are the technologies i've worked with</p>
            </div>

            <div className='w-full grid grid-col-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {tech.map(({id,src,text,style}) =>(


                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>

                    <img src={src} alt="" className='w-20 mx-auto' />

                    <p className='mt-4'>{text}</p>
                </div>
                ))}

            </div>

        </div>
    
    </div>
  )
}

export default Expirence
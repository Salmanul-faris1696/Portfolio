import React from 'react'
import {FaGithub,FaLinkedin,FaInstagram} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import {BsPersonBadge} from 'react-icons/bs'

function SocialLinks() {

    const socialLinks=[
        {
            id:1,
            child:(
                <>
                    Linkedin <FaLinkedin size={30}/>
                    </>
            ),
            href:'https://www.linkedin.com/in/salmanul-faris-314a14253/',
            style:'rounded-tr-md',

        },

        {
            id:2,
            child:(
                <>
                    Github <FaGithub size={30}/>
                    </>
            ),
            href:'https://github.com/Salmanul-faris1696',

        },

        {
            id:3,
            child:(
                <>
                    Instagram <FaInstagram size={30}/>
                    </>
            ),
            href:'https://www.instagram.com/sellluu._/?next=%2F',

        },

        {
            id:4,
            child:(
                <>
                    Mail <HiMail size={30}/>
                    </>
            ),
            href:'mailto:salmansb0786@gmail.com',

        },

        {
            id:5,
            child:(
                <>
                    Resume <BsPersonBadge size={30}/>
                    </>
            ),
            href:'/Salman[1].pdf',
            style:'rounded-br-md',
            download:true,

        },





    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {socialLinks.map(({id,child,href,style,download}) =>(

            <li  key={id} className={`flex justify-between items-center w-40 h-[40px] px-4 bg-gray-500 ml-[-100px]  hover:rounded-md  hover:ml-[-10px] duration-300  ${style}`}>

            <a href={href} className='flex justify-between items-center w-full text-white 'download={download} target='_blank' >
                

                
                
                {child}
            </a>
            </li>
        ))}



          
        </ul>


    </div>
  )
}

export default SocialLinks
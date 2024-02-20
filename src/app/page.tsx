import Image from 'next/image'
import React, { useState } from 'react'
import Logo from "../../public/pngwing.com.png"
import Form from '@/components/Form';
import Meta from "../../public/meta-logo-12362.png"

const page = () => {
        
  return (
    <div className=' relative bg-[#eeeeee] h-screen text-black text-center  ' >
         <p className='pt-[10px] pb-[100px] text-[#a9a3b7] text-sm ' >English(India)</p>
         <Image src={Logo} alt='' className=' w-[70px] mx-auto ' />
         <Form />
         <div className=' absolute bottom-0 left-0 right-[0px] mx-auto '> 
           <button type='submit' className=' w-[95%] text-center mx-auto h-[50px]  text-[16px]  font-mediam border border-[#0064e0]  rounded-full text-[#0064e0] mt-[50px]   ' >Create new account</button>
           <Image src={Meta} alt="" className=' w-[70px] mx-auto py-[20px] ' />
           </div>
    </div>
  )
}

export default page
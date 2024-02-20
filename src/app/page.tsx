import Image from 'next/image'
import React, { useState } from 'react'
import Logo from "../../public/pngwing.com.png"
import Form from '@/components/Form'

const page = () => {
        
  return (
    <div className=' bg-[#eeeeee] h-screen text-black text-center  ' >
         <p className='pt-[10px] pb-[100px] text-[#a9a3b7] text-sm ' >English(India)</p>
         <Image src={Logo} alt='' className=' w-[70px] mx-auto ' />
         <Form />
    </div>
  )
}

export default page
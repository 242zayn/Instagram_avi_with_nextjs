import { NextResponse } from "next/server"

export const GET =()=>{

    const user = [
        {
                name:"sarvesh",
                Age: 25 ,
                langauge: "Javascript"
        }
    ]

   return  NextResponse.json(user)
}
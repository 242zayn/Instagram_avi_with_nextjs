import { MONGODB_URL } from "@/libs/mongodb";
import { All_Data } from "@/models/model";
import mongoose from "mongoose";
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

export async function POST (req: Request , res: Response){

    const body = req.json(); 
    console.log(body)

    await mongoose.connect(MONGODB_URL)
       
    let product = new All_Data({
        email:"text2@gmail.com",
        password:"text@123"
    })

    const result = await product.save();

    return NextResponse.json({result, succesa:true})

}
import  { MONGODB_URL } from "@/libs/mongodb";
import { All_Data } from "@/models/model";

import mongoose, { model } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){

   await mongoose.connect(MONGODB_URL)

   const data = await All_Data.find();
   console.log(data)

    return NextResponse.json({result : data})

}

export async function POST   (req : Request  ){
            
    try {
        const body = await req.json();
       
        await mongoose.connect(MONGODB_URL)

       
        let product = new All_Data(body)

        const result = await product.save();
        console.log(result)
        return NextResponse.json({result, succesa:true})


    } catch (error) {

        return NextResponse.json(  {message: "Server Error ! Please try again"

        }, {status: 501})
        
    }
}


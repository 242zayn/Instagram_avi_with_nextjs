import  { MONGODB_URL } from "@/libs/mongodb";
import All_Data from "@/models/model";
import mongoose, { model } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){

   await mongoose.connect(MONGODB_URL)

    return NextResponse.json({result : true})

}

export async function POST   (req : Request  ){
            
    try {
        const body = req.json(); 
        await mongoose.connect(MONGODB_URL)
        // let data = new model({
        //     email:"text@gamil.com",
        //     password:"text123"
        // }):
        // await connection_Mongodb ;
        //  All_Data.create(body)
        // return NextResponse.json({result : body})

    } catch (error) {

        return NextResponse.json(  {message: "Server Error ! Please try again"

        }, {status: 501})
        
    }
}


import { NextResponse } from "next/server"

export function DELETE ({params}:any){
    console.log(params)

    return NextResponse.json({
        message: `This id is ${params} `
    })

}
import mongoose from "mongoose"
 
 export const MONGODB_URL=`mongodb+srv://sarveshsharma:QBzQlembdsMleMeF@cluster0.kuy9vrl.mongodb.net/avi_db?retryWrites=true&w=majority`

  const connection_Mongodb = async ()=>{

    try {
       await  mongoose.connect(MONGODB_URL)
       console.log("Database connected")
    } catch (error) {

        console.log(error)
        
    }
     
}


export default connection_Mongodb ;
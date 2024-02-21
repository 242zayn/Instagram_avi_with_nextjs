import mongoose from "mongoose";

const dataSceema = new mongoose.Schema(
     {
        email:String  ,
        password: String
     }
)

export const All_Data = mongoose.models.all_Data || mongoose.model("all_Data" , dataSceema);

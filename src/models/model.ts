import mongoose, { Schema } from "mongoose";

const dataSceema = new Schema(
     {
        email:String  ,
        password: String
     }
)

const All_Data = mongoose.models.All_Data || mongoose.model("All_Data" , dataSceema);

export default All_Data
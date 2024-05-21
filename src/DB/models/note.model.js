import { Schema,Types,model } from "mongoose";

const noteSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    userId:{
        type: Types.ObjectId,
        required:true,
        ref:"User"
    }
}
,{
    timestamps:true
})

const noteModel =model("Note",noteSchema)
export default noteModel    
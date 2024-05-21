import { Schema,model } from "mongoose";

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:Boolean,
        default:false
    },
    age:Number,
    phone:String,
    gender:{
        type:String,
        default:"male",
        enum:["female","male"]
    }
}
,{
    timestamps:true
})

const userModel =model("User",userSchema)
export default userModel    
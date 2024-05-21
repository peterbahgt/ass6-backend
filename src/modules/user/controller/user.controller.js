import userModel from "../../../DB/models/user.model.js"
//add user (signup)
export const addUser=async(req, res) =>{ 
 try {
    const user=await userModel.create(req.body)
    return  res.json({message:'done',user})
 } catch (error) {
    if (error?.code==11000) {
        return res.json({message:"email already exist"})
    }
    return  res.json({message:"error happen",error})
 }}
//all user
export const allUser=async(req,res)=>{
    try {
        const users =await userModel.find()
        return res.json({message:"done",users})
    } catch (error) {
        return  res.json({message:"error happen",error})
    }
}
//update user
export const updateUser=async(req,res)=>{
    try { 
        const{id}=req.params
        const updateUser=await userModel.findOneAndUpdate({_id:id},req.body,{new:true})
        return res.json({message:"done",updateUser})
    } catch (error) {
        return  res.json({message:"invalid id"})
    }   
}
//delete user
export const deleteUser=async(req,res)=>{
    try { 
        const{id}=req.params
        const deleteUser=await userModel.findOneAndDelete(id)
        return deleteUser? res.json({message:"done",deleteUser}): res.json({message:"invalid id"})
    } catch (error) {
        return  res.json({message:"error happen",error}) 
    }
}
//signIn
export const signIn=async(req,res)=>{
    try {
        const{email,password}=req.body
        const user=await userModel.findOne({email,password})
        if(user){
            return res.json({message:"success",user})
        }
        return res.json({message:"invalid email or password"})
    } catch (error) {
        return  res.json({message:"error happen",error}) 
    }
}
//get all user with posts
export const getUser = async (req, res) => {
    try {
        const{id}=req.params
        const user =await userModel.find({_id:id}).populate("_id")
        return res.json({message:"done",user})
    } catch (error) {
        return res.status(500).json({ message: "Error occurred.", error: error.message, stack: error.stack });
    }
};
//search with his name 
export const searchUser = async (req, res, next) => {
    try {
        const { name, age } = req.body;
        if (!name || !age) {
            return res.status(400).json({ message: "Name and age are required." });
        }
        console.log("Search Criteria:", { name, age });
        const users = await userModel.find({ 
        name: { $regex: new RegExp(`^${name}`, 'i') }
        , age: { $lt: age } })
        if (users.length === 0) {
           return res.json({message:`No users found for name starting with '${name}' and age less than ${age}.`});
        } 
        return res.json({ message: "Users retrieved successfully.", users });
    } catch (error) {
        console.error("Error occurred:", error);
        return res.json({ message: "Error occurred.", error: error.message, stack: error.stack });
    }
};
//search where age between 
export const searchAge=async(req,res)=>{
    try {
        const { min, max } = req.body.age;
        const users = await userModel.find({
            age: { $gte: min, $lte: max } 
        });
        if (users.length === 0) {
            return res.json({message:`No users found between this ages`});
         }
        return res.json({ message: "Users retrieved successfully.", users });
    } catch (error) {
        return  res.json({message:"error happen",error})
    }
}





import noteModel from "../../../DB/models/note.model.js"
//add note
export const addNote=async(req, res) =>{ 
    try {
       const note=await noteModel.create(req.body)
       return  res.json({message:'done',note})
    } catch (error) {
       return  res.json({message:"error happen",error})
    }}
//all note
export const allNote=async(req,res)=>{
    try {
        const notes =await noteModel.find()
        return res.json({message:"done",notes})
    } catch (error) {
        return  res.json({message:"error happen",error})
    }
}
//all note with owner info
export const allNoteWithInfo=async(req,res)=>{
    try {
        const notes =await noteModel.find().populate("userId")
        return res.json({message:"done",notes})
    } catch (error) {
        return  res.json({message:"error happen",error})
    }
}
//update
export const updateNote=async(req,res)=>{
    try {
       const{id}=req.params
       const{title,content,userId}=req.body
       const updateNotes=await noteModel.findOneAndUpdate({_id:id,userId},{title,content},{new:true})
        return res.json({message:"done",updateNotes})
    } catch (error) {
        return  res.json({message:"invalid id"})
    }
}
//delete
export const deleteNote=async(req,res)=>{
    try {
        const{id}=req.params
        const{userId}=req.body
        const deleteNote=await noteModel.findOneAndDelete({_id:id,userId})
        return res.json({message:"done",deleteNote})
    } catch (error) {
        return  res.json({message:"invalid id"})
    }
}
//sort note descending bu date
export const sortNote = async (req, res) => {
    try {
      const notes = await noteModel.find().sort({ createdAt: -1 });
      return res.json({ message: "done", notes });
    } catch (error) {
      return res.json({ message: "error happened", error });
    }
  };
  
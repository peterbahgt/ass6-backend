import { Router } from "express";
import { addNote, allNote, allNoteWithInfo, deleteNote, sortNote, updateNote } from './controller/note.controller.js';
const router=Router()
//add note
router.post("/",addNote)
//all note
router.get("/",allNote)
//allnote with owner info
router.get("/info",allNoteWithInfo)
//update 
router.patch("/:id",updateNote)
//delete
router.delete("/:id",deleteNote)
//sort note 
router.get("/sort",sortNote)


export default router
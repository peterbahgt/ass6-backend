import { Router } from "express";
import { addUser, allUser, deleteUser, getUser, searchAge, searchUser, signIn, updateUser } from "./controller/user.controller.js";
const router =Router()
//add user
router.post('/add', addUser)
//get all user
router.get("/",allUser)
//updated user
router.patch("/:id",updateUser)
//delete user
router.delete("/:id",deleteUser)
//sign in 
router.post("/signIn",signIn)
//get user with post
router.get("/:id",getUser)
//search user where his name 
router.post("/search",searchUser)
//search age between 
router.post("/age",searchAge)


export default router; 
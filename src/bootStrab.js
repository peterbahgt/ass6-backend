import { connection } from "./DB/connection.js"
import userRouter from"./modules/user/user.router.js"
import noteRouter from"./modules/note/note.router.js"
const bootstrap=(app,express)=>{
    app.use(express.json())
    app.use("/user",userRouter)
    app.use("/note",noteRouter)
    connection()
}
export default bootstrap
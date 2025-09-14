import mongoose from "mongoose"

const Schema=mongoose.Schema({
    title:{
        type:String,
        required:[true,"enter the tittle please"]
    },description:{
        type:String,
        required:[true,"enter the description"]
    },category:{
        type:String,
        required:[true,"enter the category"]
    }

}
, {timestamps: true }
)

const Task=mongoose.model("Tasks",Schema)

export default Task
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required: true,
        },
        color : {
            type : String,
            enum: ["red", "green", "white", "yellow", "orange", "pink", "purple", "violet"],
            default: "white",
        },
        createdBy : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required: true
        },
        subTodos : {
            type : [
                {
                    type : mongoose.Schema.Types.ObjectId,
                    ref: "SubTodo"
                }
            ]   // Array of SubTodo Schemas
        }
    }, {timestamps: true}
);
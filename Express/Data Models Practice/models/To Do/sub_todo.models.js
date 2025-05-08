import mongoose from 'mongoose';

const SubTodoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    }, 
    description : {
        type: String,
    }, 
    isDone : {
        type: Boolean,
        required: true,
        default: false,
    }, 
    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
}, {timestamps : true});

export const SubTodo = mongoose.model(SubTodoSchema);
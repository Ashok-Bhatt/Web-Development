"use strict";

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title : {
        type : 'string',
        required : true
    },
    description : {
        type : 'string',
        required : true
    },
    isTaskDone : {
        type : 'boolean',
        required : false,
        default : false
    }
});

module.exports = mongoose.model("task", taskSchema);
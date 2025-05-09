"use strict";

const express = require("express");
const mongoose = require("mongoose");
const taskModel = require("./task.js");

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("./views"));
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/to_do_database", {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

app.get("/", async (req, res)=>{
    const tasks = await taskModel.find();
    res.render("index", {tasks : tasks});
});

app.post("/addTask", async (req, res)=>{
    await taskModel.create({title: req.body.titleEntry, description: req.body.descriptionEntry});
    res.redirect("/");
});

app.delete("/deleteTask/:id", async (req, res)=>{
    try{
        await taskModel.findByIdAndDelete(req.params.id);
        res.json({success: true});
    } catch (error){
        console.log(error);
        res.status(500).json({success : false, error : "Failed to delete task."});
    }
});

app.patch("/toggleTaskStatus/:id", async (req, res) => {
    try{
        const task = await taskModel.findById(req.params.id);
        const updatedTask = await taskModel.findByIdAndUpdate(
            req.params.id, 
            {isTaskDone : !task.isTaskDone},
            {new: true}
        );
        res.json({success: true, task : updatedTask});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, error: "Failed to change the status of the task"});
    }
});

app.listen(port, ()=>{
    console.log("App running on port 3000");
});
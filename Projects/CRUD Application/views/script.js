"use strict";

const deleteButtons = document.querySelectorAll(".delete-button");
const checkedButtons = document.querySelectorAll(".checked-button");
const uncheckedButtons = document.querySelectorAll(".unchecked-button");

deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", async ()=>{
        const taskId = deleteButton.getAttribute("data-id");
        if (confirm("Are you sure you want to delete this task?")){
            try{
                const response = await fetch(`/deleteTask/${taskId}`, {method : "DELETE"});
                const data = await response.json();
                if (data.success){
                    document.getElementById(`task-${taskId}`).remove();
                } else {
                    alert("Failed to delete task");
                }
            } catch (error) {
                console.log(error);
            }
        }
    });
});

checkedButtons.forEach((checkedButton)=>{
    checkedButton.addEventListener("click", async (event)=>{
        const taskId = checkedButton.getAttribute("data-id");
        try{
            const response = await fetch(`toggleTaskStatus/${taskId}`, {method: "PATCH"});
            const data = await response.json();
            if (data.success){
                // document.getElementById(`task-${taskId}`).remove();
                document.getElementById(`task-${taskId}`).lastChild().lastChild().remove();
            } else {
                alert("Failed to uncheck the task");
            }
        } catch (error){
            console.log(error);
        }
    });
});

uncheckedButtons.forEach((uncheckedButton)=>{
    uncheckedButton.addEventListener("click", async (event)=>{
        const taskId = uncheckedButton.getAttribute("data-id");
        try{
            const response = await fetch(`toggleTaskStatus/${taskId}`, {method: "PATCH"});
            const data = await response.json();
            if (data.success){
                document.getElementById(`task-${taskId}`).remove();
            } else {
                alert("Failed to uncheck the task");
            }
        } catch (error){
            console.log(error);
        }
    })
});
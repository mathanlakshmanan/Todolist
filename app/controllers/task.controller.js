const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const Task = db.task;

exports.allusers = (req, res) => {
User.find({}).then(data => {
    res.json(data);
}).catch(err => {
    res.status(500).json({
        message:err.message || "Some error occurred While retrieving data"
    })
})
};

exports.alltask = (req, res) => {
    Task.find({}).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json({
            message:err.message || "Some error occurred While retrieving data"
        })
    })
    };

    exports.singletask = (req, res) => {
        const id = req.params.id;
        Task.findById(id).then(data => {
            if(!data){
                res.status(404).json({message: "Not found Task with id " + id})
            }else{
                res.json(data);

            }
        }).catch(err => {
            res.status(500).json({
                message: "Error retrieving Task with id=" + id
            })
        })
        };
    

exports.addtask = (req, res) => {
    if(!req.body.assigned_user){
        res.status(400).json({message: "Assigned User can not be empty!"});
    }else if(!req.body.task_date){
        res.status(400).json({message: "Task Date can not be empty!"});
    }else if(!req.body.task_time){
        res.status(400).json({message: "Task Time can not be empty!"});
    }else if(!req.body.is_completed){
        res.status(400).json({message: "completed can not be empty, provide true or false!"});
    }else if(!req.body.time_zone){
        res.status(400).json({message: "Time zone can not be empty!"});
    }else if(!req.body.task_msg){
        res.status(400).json({message: "Task Message can not be empty!"});
    }
    const task = new Task({
        assigned_user: req.body.assigned_user,
        task_date: req.body.task_date,
        task_time: req.body.task_time,
        is_completed: req.body.is_completed,
        time_zone: req.body.time_zone,
        task_msg:req.body.task_msg
    })
    task.save(task).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json({
            message:err.message || "Some error occurred While Creating task"
        })
    })
    };


    

    exports.updatetask = (req, res) => {
        if(!req.body.assigned_user){
            res.status(400).json({message: "Assigned User can not be empty!"});
        }else if(!req.body.task_date){
            res.status(400).json({message: "Task Date can not be empty!"});
        }else if(!req.body.task_time){
            res.status(400).json({message: "Task Time can not be empty!"});
        }else if(!req.body.is_completed){
            res.status(400).json({message: "completed can not be empty, provide true or false!"});
        }else if(!req.body.time_zone){
            res.status(400).json({message: "Time zone can not be empty!"});
        }else if(!req.body.task_msg){
            res.status(400).json({message: "Task Message can not be empty!"});
        }

        const id = req.params.id;

        Task.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(data => {
            if (!data) {
                res.status(404).send({
                  message: `Cannot update Task with id=${id}. Maybe Task was not found!`
                });
              }else res.send({ message: "Task was updated successfully." });
           
        }).catch(err => {
            res.status(500).json({
                message: "Error updating Task with id=" + id
            })
        })
        };

        
        exports.deletetask = (req, res) => {
            const id = req.params.id;
            Task.findById(id).then(data => {
                if(!data){
                    res.status(404).json({message: "Not found Task with id " + id})
                }else{
                    res.json({message: "Task was deleted successfully!"});
    
                }
            }).catch(err => {
                res.status(500).json({
                    message: "Could not delete Task with id=" + id
                })
            })
            };
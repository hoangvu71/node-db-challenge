const express = require("express")
const router = express.Router();
const projectModel = require("./projectModel")

router.get("/", (req, res) => {
    projectModel.findProject()
        .then((project) => {
            res.json(project)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                errorMessage: "Failed to get project."
            })
        })
})

router.post("/", (req, res) => {
    const project = req.body
    projectModel.addProject(project)
        .then((project) => {
            res.json(project)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                errorMessage: "Failed to add project."
            })
        })
})

router.get("/:id/tasks", (req, res) => {
    projectModel.getTaskByProjectId(req.params.id)
        .then((tasks) => res.json(tasks))
        .catch((error) => {
            console.log(error),
            res.json({
                errorMessage: "Failed to get tasks."
            })
        })
})  


router.post("/:id/tasks", (req, res) => {
    const task = {
        project_id: req.params.id,
        description: req.body.description,
        notes: req.body.notes
    }
    projectModel.addTask(task)
    .then((tasks) => res.json(tasks))
        .catch((error) => {
            console.log(error),
            res.json({
                errorMessage: "Failed to post tasks."
            })
        })
})
module.exports = router
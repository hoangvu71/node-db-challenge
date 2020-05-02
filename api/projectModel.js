const db = require("../data/config")

module.exports = {
    findProject,
    addProject,
    getTaskByProjectId,
    addTask
}

function findProject() {
    return db("projects")   
}

function addProject(project) {
    return db("projects").insert(project)
}

function getTaskByProjectId(id) {
    return db("tasks").where("project_id", id)
}

function addTask(task) {
    return db("tasks").insert(task)
}
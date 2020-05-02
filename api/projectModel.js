const db = require("../data/config")

module.exports = {
    findProject,
}

function findProject() {
    return db("projects")   
}
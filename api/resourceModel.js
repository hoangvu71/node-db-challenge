const db = require("../data/config")

module.exports ={
    findResource,
    addResource
}

function findResource() {
    return db("resources")
}

function addResource(resource) {
    return db("resources").insert(resource)
}
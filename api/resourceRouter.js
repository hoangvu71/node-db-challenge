const express = require("express")

const router = express.Router()

const resourceModel = require("./resourceModel")

router.get("/", (req, res) => {
    resourceModel.findResource()
        .then((resource) => {
            res.json(resource)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                errorMessage: "Failed to get project."
            })
        })
})

router.post("/", (req, res) => {
    const resource = req.body
    resourceModel.addResource(resource)
    .then((resource) => {
        res.json(resource)
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json({
            errorMessage: "Failed to get project."
        })
    })
})
module.exports = router
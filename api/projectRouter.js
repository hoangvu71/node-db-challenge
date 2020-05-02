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


module.exports = router
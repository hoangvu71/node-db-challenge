const express = require("express")

const server = express()
const projectRouter = require("./api/projectRouter")
const resourceRouter = require("./api/resourceRouter")
const port = 5000

server.use(express.json())
server.use("/projects", projectRouter)
server.use("/resources", resourceRouter)


server.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`)
})
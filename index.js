const express = require("express")

const server = express()
const projectRouter = require("./api/projectRouter")
const port = 5000

server.use(express.json())
server.use("/projects", projectRouter)

server.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`)
})
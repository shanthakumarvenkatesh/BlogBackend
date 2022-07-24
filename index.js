const express = require('express')
const bollyRouter = require('./route/Bollywood')
const hollyRouter = require('./route/Hollywood')
const techRouter = require('./route/Technology')
const fitRouter = require('./route/Fitness')
const foodRouter = require('./route/Food')
const homeRouter = require('./route/Home')
const itemRouter = require('./route/Items')
const cors = require("cors")
const app = express()

app.use(cors())
app.use("/api",bollyRouter)
app.use("/api",hollyRouter)
app.use("/api",techRouter)
app.use("/api",fitRouter)
app.use("/api",foodRouter)
app.use("/api",homeRouter)
app.use("/api",itemRouter)


app.listen(process.env.PORT||8000,()=>{
    console.log("app is running");
})
const express = require("express");
const blogrouter = require("./routes/blogroute");
const cors = require("cors")

const app = express()
app.use("/main", blogrouter)
app.use(cors)

app.listen( process.env.PORT, 4545, () => {
    console.log("app is started");
})

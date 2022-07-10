const express = require("express");
const app = express()
const blogrouter = require("./routes/blogroute");
const cors = require("cors") 
app.use(cors())

app.use("/main", blogrouter);

app.listen( process.env.PORT || 4545, () => {
    console.log("app is started");
})
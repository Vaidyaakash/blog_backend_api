const express = require("express");
const app = express()
const blogrouter = require("./routes/blogroute");
const corss1 = require("cors") 


app.use("/main", blogrouter);
app.use(corss1)

app.listen(4545, () => {
    console.log("app is started");
})
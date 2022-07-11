const express = require("express");
const app = express()
const cors = require("cors"); 
const bollyRoute = require("./routes/bolly1");
const healthRoute = require("./routes/health1");
const sportsRoute = require("./routes/sports1");
const techRoute = require("./routes/tech1");
const tourRoute = require("./routes/tourism1");
app.use(cors())

app.use("/category", bollyRoute)
app.use("/category", healthRoute)
app.use("/category", sportsRoute)
app.use("/category", techRoute)
app.use("/category", tourRoute)

app.listen( process.env.PORT || 4545, () => {
    console.log("app is started");
})
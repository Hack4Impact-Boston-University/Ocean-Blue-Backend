// routing
const express = require('express')
const cors = require("cors");
const app = express();
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 3000;
//imports

//routes
app.get("/", (req, res) => {
    res.send("Hello wordl!")
})

app.listen(PORT, () => console.log("Listening on port 3000"));
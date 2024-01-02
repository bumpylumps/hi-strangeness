const express = require("express");
const app = express(); 

const PORT = process.env.PORT || 3001;


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
})

const mainRoutes = require('./routes/main');

//.env configs
require('dotenv').config({path: '.env'})


app.use('/', mainRoutes);



app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})




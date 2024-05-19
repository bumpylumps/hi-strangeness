const express = require('express');
const app = express(); 

const PORT = 3001;



const mainRoutes = require('./routes/main');

//.env configs
require('dotenv').config({path: '.env'});


app.use('/', mainRoutes);

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})




const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routers');
const path = require('path');

const app = express();



app.use(bodyParser.urlencoded({extended:false}));
app.use(router);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, ()=>{
    console.log('Listening on Port 3000');
});
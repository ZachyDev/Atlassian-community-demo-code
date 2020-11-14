const express = require('express');

const app = express();

const PORT = 3000;

app.get('/',(res,req,next) => {
    req.send('welcome to our app');
});

app.listen(PORT)
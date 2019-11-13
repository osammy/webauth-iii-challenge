const express = require('express');
const resources = require("./resources");
const middlewares = require("./middlewares");

const app = express();

middlewares(app);
app.use(resources);



app.use((err,req,res,next) => {
    const {status,message} = err;

    res.json({
        status,
        message
    })
})

module.exports = app;
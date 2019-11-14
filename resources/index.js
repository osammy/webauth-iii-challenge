const app = require('express')();
const usersRouter = require('./users/users.route');

app.use('/api/users',usersRouter);

module.exports  = app;

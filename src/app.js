const express= require('express')
const userController = require('./controller/user.controller')
const app = express();


//  use middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/registion', userController.registration);
app.post('/login', userController.login)


module.exports = { app }
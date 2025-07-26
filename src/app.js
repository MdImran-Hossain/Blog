const express= require('express')
const userController = require('./controller/user.controller')
const categoryController = require ('./controller/category.controller')
const app = express();


//  use middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/registion', userController.registration);
app.post('/login', userController.login)


app.post('/create-category', categoryController.createCategory);
app.get('/getallcategory', categoryController.getAllCategory);
app.get('/single-category/:name', categoryController.getSingleCategory);
app.put('/update-category/:id', categoryController.updateCategory);
app.delete('/delete-category/:id', categoryController.deleteCategory);
module.exports = { app }
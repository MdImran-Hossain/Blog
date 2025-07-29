const express= require('express')
const userController = require('./controller/user.controller')
const categoryController = require ('./controller/category.controller')
const blogController = require ('./controller/blog.controller')
const upload = require ('./middleware/multer.middleware')
const path = require ('path')

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

//  bolg api
app.post('/create-blog', upload.single('image') , blogController.createBlog);
app.get('/getAllblog', blogController.getAllblog);
app.get('/getSingleblog/:id', blogController.getSingleblog);
app.put('/upate-blog/:id', upload.single('image') ,  blogController.updateBlog);
app.use('/static', express.static('public/tem'));

module.exports = { app }
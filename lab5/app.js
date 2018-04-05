//you should require "express" module
const exp = require('express');
//calling the constructor
const app = exp();
//when you join paths you have to have this module
const path = require('path');

//when you use json objects to pass data this should be written. in get method client will get data in terms of a json object
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//define the port to listen
app.listen(3000,function(err){
    if(err)
    {
        console.error(err);
        return;
    }
    console.log("listening to port 3000...");
});

/*if you want to serve static files such as images,css files, js files you have to use the this express in-build
middleware function
first of all create a directory(file1) in your project and save a image inside it
in you browser give the path as localhost:3000/image.jpg*/
app.use(exp.static(path.join(__dirname,'file1')));

/*if you want to view the image from  a vertual path use this method
 in your browser give the path as localhost:3000/abc/image.jpg*/
app.use('/abc',exp.static(path.join(__dirname,'file1')));


/*lets focus on how to handle get and put requests. first create User.js file in your project*/
/*now you have to require the created js file*/
const userObj = require('./User');

/*now im creating an array to save the user object which client passes along with the post request*/
const users = [];

/*when client give the URI as http://localhost:3000/addUser alone with a post request(have to give the request body)
this method will fetch the details from request body and put that in to the seperately created user object and finally
 will push in to the users array*/
app.post('/add',function(req,res){
    const user = new userObj(req.body.fname,req.body.lname,new Date(req.body.bday),Date.now());
    users.push(user);
    res.status(200).send({message:"successfully added",data:user});
});


/*when client type URI as http://localhost:3000/getAllUser alone with a get request,
he will get the users array interms of a json object*/
app.get('/all',function(req,res){
    try
    {
        res.status(200).send({data:users});
    }
    catch(e)
    {
        res.status(500).send({message:e});
    }


});
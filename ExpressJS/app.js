'use strict';
const exp = require('express');
const app = exp();
app.use(exp.json());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send('<h3>hello world</h3>');
});

app.listen(3000,function() {
    console.log("listening to port 3000");
});

const users=[];
users.push({
    name:'bean'
});

app.get('/users',function(req,res){
    res.json(users);
});

app.post('/users',function(req,res){
    const user1 = req.body.name;
    users.push(user1);
    res.status(201).send({message:"success",data:users});
});
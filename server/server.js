const {ObjectID} = require("mongodb");
const express  =require("express");
const bodyParser = require("body-parser");

const {mongoose} = require("./db/mongoose");
const {Todo} = require("./modles/todo");
const {col2} = require("./modles/user");

let app = express();

app.use(bodyParser.json());


app.post("/col2",(req,res)=>{
    let col = new col2({
        email:req.body.col
    });
    col.save().then((doc)=>res.send(doc+req.body),(e)=>res.send(e));
})
 app.post("/todos",(req,res)=>{
     //console.log(req.body);
     let todo = new Todo({
         text:req.body.text
     });
     todo.save().then((doc)=>res.status(200).send(doc),(e)=>res.status(400).send(e));
 })
app.get("/todos",(req,res)=>{
    Todo.find().then((todos)=>res.send({todos}),
    (e)=>res.status(400).send(e));
})

app.get("/todos/:id",(req,res)=>{
    let id = req.params.id;
    if(!ObjectID.isValid(id))
    return res.status(400).send("not correct id");
    Todo.findById(id).then((todo)=>{
        if(!todo)
        return res.status(404).send("no matching.")
        res.status(200).send({todo});
    }).catch((e)=>res.status(500).send());
})

app.listen(3000,()=>{
    console.log("started 3000...");
})

module.exports = {
    app
}



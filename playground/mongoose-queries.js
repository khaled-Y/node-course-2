const {ObjectID} = require("mongodb");
const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/modles/todo");
const {col2} = require("./../server/modles/user");

let id = "5bebfb879a1df517b4a43643";

col2.findById(id).then((todo)=>{
    if(!todo)
    throw Error("not found");
    console.log(todo);
}).catch((e)=>console.log(e));
// if(!ObjectID.isValid(id)){
//     console.log("not valid");
// };

// Todo.find({
//     _id:id
// }).then((todos)=>console.log(todos));

// Todo.findOne({_id:id}).then((todo)=>console.log(todo));

// Todo.findById(id).then((todo)=>{
//     if(!todo)
//     return console.log("not found matching");    
//     console.log(todo)
// }).catch((e)=>console.log(e.CastError));


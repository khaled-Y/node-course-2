const {ObjectID} = require("mongodb");
const {mongoose} = require("../server/db/mongoose");
const {Todo} = require("../server/modles/todo");
const {col2} = require("../server/modles/user");

let id = "5bebfb879a1df517b4a43643";

//Todo.remove({}).then((res)=>console.log(res));
Todo.findByIdAndRemove("5bf218d16475732c106e5366").then((doc)=>console.log(doc));
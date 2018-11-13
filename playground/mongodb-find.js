const MongoC = require("mongodb");
const {MongoClient} = MongoC;

MongoClient.connect("mongodb://localhost:27017/TodoApp",(error,cliant)=>{

if(error)
return console.log(error);
console.log("find.js connected...");
let db = cliant.db("TodoApp");

//db.collection("Todos").find().toArray().then((res)=>console.log(res[0]));

//db.collection("Todos").find({completed:true}).toArray().then((res)=>console.log(res));

db.collection("Todos2").find({cha: "cha1 db"}).count().then((res)=>console.log(res));

cliant.close();
})
const mongoc = require("mongodb");
const {MongoClient,ObjectID} = mongoc;

MongoClient.connect("mongodb://localhost:27017/TodoApp",(error,client)=>{
    if(error)
    return console.log("error");
    let db = client.db("TodoApp");
    db.collection("Todos2").findOneAndDelete({_id:new ObjectID("5beb40b5cd16814c8ccb16b8")}).then((res)=>{
        console.log(res);
    });//deleteMany({cha:"cha1 db"}).then((res)=>console.log(res));
    //client.close();
});
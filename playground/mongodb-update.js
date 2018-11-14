const mongoc = require("mongodb");
const {MongoClient,ObjectID} = mongoc;

MongoClient.connect("mongodb://localhost:27017/TodoApp",(error,client)=>{
    if(error)
    return console.log("error");
    let db = client.db("TodoApp");
    db.collection("Todos2").updateMany(
        {age:{$exists:true}},
        {$set:{cha:"khaled"},$inc:{age:10}},
        // {returnOriginal:false}
        ).then((res)=>{
        console.log(res);
    });//deleteMany({cha:"cha1 db"}).then((res)=>console.log(res));
    //client.close();
});
const MongoC = require("mongodb");
const {MongoClient} = MongoC;


MongoClient.connect("mongodb://localhost:27017/TodoApp",(error,client)=>{
        if(error)
        return console.log(error);
        console.log("connected...");
        // let db = client.db("TodoApp");
        // db.collection("Todos").insertOne({
        //             // _id: 123,
        //             text:"something",
        //             completed:false
        // },(error,result)=>{
        //     if(error)
        //     return console.log(error.MongoError);
        //     console.log(result.ops[0]._id);
        // })
        client.close();
})
// MongoC.connect("mongodb://localhost:27017/TodoApp",(error,client)=>{
//     if(error)
//     return console.log(error);
//     console.log("connected to cha1...");
//     let db = client.db("TodoApp");
//     db.collection("Todos2").insertOne({
//         cha:"cha1 db"
//     },(error,res)=>{
//         console.log(res.ops);
//     });
//     client.close();
// })
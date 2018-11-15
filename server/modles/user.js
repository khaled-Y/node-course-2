const mongoose = require("mongoose");

// let col = mongoose.model("col1",{
//     name:{type:String},
//     age:{type:Number,required:true},
//     regestired:{type:Boolean}
// });

// let doc = new col({});
// doc.save().then((res)=>console.log(res));
let col2 = mongoose.model("col2",{
    email:{type:String,trim:true,minlength:1<2?1:2,required:true}
})

module.exports = {
    col2
}
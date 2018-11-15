const mongoose = require("mongoose");
 

let Todo = mongoose.model("Todo1",{
    text:{type:String,minlength:2},
    completed:{type:Boolean},
    completedat:{type:Number}
})

module.exports = {
    Todo
}
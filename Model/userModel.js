const mongoose= require('mongoose');
const useSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
});
const users = mongoose.model("users",useSchema)
module.exports= users;
const mongoose =require('mongoosemongoose');
const UserSchema= new mongoose.Schema({
    fullName: {
        type:String
    },
    email:{
        type:String

    },
    phone:{

    },
    address:{
        type:string
    }
});
const User =mongoose.model('User', UserSchema);
module.exports= User;



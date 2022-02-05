const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50
    }, 
    email:{
        type: String,
        trim: true,
        unique: 1  // 똑같은 이메일은 쓰지 못하게 유니크하게
    },
    password:{
        type: String,
        minlength: 5
    },
    lastname:{
        type: String,
        maxlength: 50
    },
    role:{
        type: Number,
        default: 0
    },
    image:String,
    token:{
        type: String
    },
    tokenExp:{  // 토큰 사용 기간
        type: Number
    }

})

const User = mongoose.model('User', userSchema)

module.exports = {User}
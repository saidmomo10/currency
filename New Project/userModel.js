const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    email: {
        type:String
    },
    password: {
        type:String
    },
    histories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'History'
      }]
},{
    timestamps: true,
})

const User = mongoose.model('User', UsersSchema)
module.exports = User
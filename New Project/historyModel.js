const mongoose = require('mongoose');

const HistorySchema = mongoose.Schema({
    departValue:{
        type: Number,
        require: true,
    },
    firstCurrency:{
        type: String,
        require: true,
    },
    secondCurrency:{
        type: String,
        require: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,

    }
},{
    timestamps: true,
})

const History = mongoose.model('History', HistorySchema)
module.exports = History

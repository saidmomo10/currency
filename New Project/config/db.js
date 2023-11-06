const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

const MONGODB_URL = "mongodb://127.0.0.1:27017/departdb"

const db = async() =>{
    try {
        const con = await mongoose.connect(MONGODB_URL)
        console.log(`mongodb connected: ${con.connection.host}`)
    } catch(error) {
        console.error( error )
    }
}

module.exports = db
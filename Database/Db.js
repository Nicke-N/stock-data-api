const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const { MongoMemoryServer } = require('mongodb-memory-server')

require('dotenv').config()

var db, mongod

if (process.env.ENVIROMENT === 'TEST') {

    mongod = MongoMemoryServer.create()
    .then( db = {
        getUri: mongod.getUri()
    })
   

} else {
    db = {
        getUri : async () => process.env.DB_CONNECTION
    }
}

const connect = async () => {
    let uri = await db.getUri()
    if (process.env.ENVIROMENT !== 'TEST') {
        await mongoose.connect(
            uri, 
            {
                useNewUrlParser: true, 
                useUnifiedTopology: true
            })
        if (!mongoose.connection) {
            throw new MongooseError("Could not connect to database!")
        } else {
            console.log('Connected to DB')
        }
    }
    
}

const disconnect = async () => {
    try {
        await mongoose.connection.close(() => {
            console.log('Database connection closed')
        })
        if (process.env.ENVIROMENT === 'TEST') await mongod.stop()
    } catch (error) {
        console.error(error)
    }
}

module.exports = { connect, disconnect }
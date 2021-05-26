const mongoose = require('mongoose')

const stockSchema = new mongoose.Schema({

    stockName: {
        type: String,
        required: true
    },
    

})
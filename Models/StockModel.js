const mongoose = require('mongoose')

const stockSchema = new mongoose.Schema({

    stockName: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    niche: {
        type: Array,
        default: []
    },
    dividend: {
        type: Number,
        default: 0
    },
    risk: {
        type: String,
        default: 'Not sure'
    },
    notes: {
        type: Array,
        default: []
    }

})


const stocks = mongoose.model('stock', stockSchema)

module.exports = {

    getStocks: async () => {
            try {
                const list = await stocks.find({})
                return list
            } catch (error) {
                return error
            }
    },

    getStock: async (id) => {
        try {
            const stock = await stocks.findOne({_id: id})
            return stock
        } catch (error) {
            return error
        }
    },

    addStock: async (data) => {
        try {
            new stocks(data).save(err => {
                if (err) return err
                return 'Stock was created!'
            })
        } catch (error) {
            return error
        }
    },

    editStock: async (stockID, stockInfo) => {
        try {
            stocks.findByIdAndUpdate(
                stockID,
                stockInfo,
                (err) => {
                    if (err) return err
                    return 'Stock was updated!'
                }
            )
        } catch (error) {
            
        }
    },

    deleteStock: async (stockID) => {
        try {
            stocks.findByIdAndRemove(
                stockID,
                (err) => {
                    if (err) return err
                    return 'Stock was removed!'
                }
            )
        } catch (error) {
            return error
        }
    }

}
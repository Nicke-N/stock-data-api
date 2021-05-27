const stocks = require('../Models/StockModel')

module.exports = {

    getStocks: async (req, res, next) => {

        try {
            const list = await stocks.getStocks()
            res.json(list)
        } catch (error) {
            next(error)
        }

    },

    getStock: async (req, res, next) => {

        try {
            const stock = await stocks.getStock(req.params.stockID)
            res.json(stock)
        } catch (error) {
            next(error)
        }

    },

    addStock: async (req, res, next) => {

        try {
            const insert = await stocks.addStock(req.body)
            res.json(insert)
        } catch (error) {
            next(error)
        }

    },

    editStock: async (req, res, next) => {
        const id = req.params.stockID

        try {
            const update = await stocks.editStock(id, req.body)
            res.send(update)
        } catch (error) {
            next(error)
        }

    },

    deleteStock: async (req, res, next) => {
        const id = req.params.stockID
        try {
            const remove = await stocks.deleteStock(id)
            res.send(remove)
        } catch (error) {
            next(error)
        }

    }

}
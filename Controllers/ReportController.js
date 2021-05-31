const reports = require('../Models/ReportModel')

module.exports = {

    getReports: async (req, res, next) => {

        try {
            var list
            if (!req.headers.stockName) {
                const stockName = req.headers.stockName
                list = await reports.getReports(stockName)
            } else {
                list = await reports.getReports()
            }
           
            res.json(list)
        } catch (error) {
            next(error)
        }

    },

    getReport: async (req, res, next) => {

        try {
            const report = await reports.getReport(req.params.reportID)
            res.json(report)
        } catch (error) {
            next(error)
        }

    },

    addReport: async (req, res, next) => {

        try {
            const insert = await reports.addReport(req.body)
            res.json(insert)
        } catch (error) {
            next(error)
        }

    },

    editReport: async (req, res, next) => {
        const id = req.params.reportID

        try {
            const update = await reports.editReport(id, req.body)
            res.send(update)
        } catch (error) {
            next(error)
        }

    },

    deleteReport: async (req, res, next) => {
        const id = req.params.reportID
        try {
            const remove = await reports.deleteReport(id)
            res.send(remove)
        } catch (error) {
            next(error)
        }

    }

}
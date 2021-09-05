const reports = require('../Models/ReportModel')

module.exports = {

    getReports: async (req, res, next) => {
       
        try {
            var list
            if (req.headers.stockname) {
                const stockName = req.headers.stockname
                
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
            res.send('Report was added!')
        } catch (error) {
            next(error)
        }

    },

    editReport: async (req, res, next) => {
        const id = req.params.reportID

        try {
            const update = await reports.editReport(id, req.body)
            res.send('Report was updated!')
        } catch (error) {
            next(error)
        }

    },

    deleteReport: async (req, res, next) => {
        const id = req.params.reportID
        try {
            const remove = await reports.deleteReport(id)
            res.send('Report was deleted!')
        } catch (error) {
            next(error)
        }

    }

}
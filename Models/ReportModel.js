const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({

    stockName: {
        type: String,
        required: true
    },
    type: { // Quarter / ANNUAL
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    revenue: {
        type: Number,
        required: true
    },
    costs: {
        type: Number,
        required: true
    },
    result: {
        type: Number,
        required: true
    },
    shortTermDebt: { // short term liabilities
        type: Number,
        required: true
    },
    longTermDebt: { // long term liabilities
        type: Number,
        required: true
    },
    capital: { // cash & cash equivalents
        type: Number,
        required: true
    },
    stockSpecificData: { // inventory, facilitydata etc..
        type: Array
    }
})

const reports = mongoose.model('report', reportSchema)

module.exports = {

    getReports: async (stockName) => {
            try {
                var list
                if (!stockName) {
                    list = await reports.find({})
                } else {
                    list = await reports.find({stockName: stockName})
                }
                 
                return list
            } catch (error) {
                return error
            }
    },

    getReport: async (id) => {
        try {
            const report = await reports.findOne({_id: id})
            return report
        } catch (error) {
            return error
        }
    },

    addReport: async (data) => {
        try {
            new reports(data).save(err => {
                if (err) return err
                return 'Report was created!'
            })
        } catch (error) {
            return error
        }
    },

    editReport: async (reportID, reportInfo) => {
        try {
            reports.findByIdAndUpdate(
                reportID,
                reportInfo,
                (err) => {
                    if (err) return err
                    return 'Report was updated!'
                }
            )
        } catch (error) {
            
        }
    },

    deleteReport: async (reportID) => {
        try {
            reports.findByIdAndRemove(
                reportID,
                (err) => {
                    if (err) return err
                    return 'Report was removed!'
                }
            )
        } catch (error) {
            return error
        }
    }

}
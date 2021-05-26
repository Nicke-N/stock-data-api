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
    shortTermDebt: {
        type: Number,
        required: true
    },
    longTermDebt: {
        type: Number,
        required: true
    },
    capital: {
        type: Number,
        required: true
    },
    stockSpecificData: {
        type: Array
    }
})

const reports = mongoose.model('report', reportSchema)

module.exports = {

    getReports: async () => {
            try {
                const list = await report.find({})
                return list
            } catch (error) {
                return error
            }
    },

    getReport: async (id) => {
        try {
            const report = await report.find({_id: id})
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
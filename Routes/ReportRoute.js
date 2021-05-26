const express = require('express')
const router = express.Router()
const reportController = require('../Controllers/ReportController')

router.get('/', reportController.getReports)

router.post('/', reportController.addReport)

router.patch('/:reportID', reportController.editReport)

rouuter.delete('/:reportID', reportController.deleteReport)

router.get('/:reportID', reportController.getReport)

module.exports = router
const express = require('express')
const router = express.Router()
const reportController = require('../Controllers/ReportController')
const { admin } = require('../Middleware/Auth')

router.get('/', reportController.getReports)

router.post('/', admin, reportController.addReport)

router.patch('/:reportID', admin, reportController.editReport)

router.delete('/:reportID', admin, reportController.deleteReport)

router.get('/:reportID', reportController.getReport)

module.exports = router
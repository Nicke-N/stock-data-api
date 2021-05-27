const express = require('express')
const router = express.Router()
const { admin } = require('../Middleware/Auth')

const stockController = require('../Controllers/StockController')

router.get('/', stockController.getStocks)

router.post('/', admin, stockController.addStock)

router.patch('/:stockID', admin, stockController.editStock)

router.delete('/:stockID', admin, stockController.deleteStock)

router.get('/:stockID', stockController.getStock)

module.exports = router
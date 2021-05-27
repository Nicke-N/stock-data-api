const express = require('express')
const router = express.Router()

const stockController = require('../Controllers/StockController')

router.get('/', stockController.getStocks)

router.post('/', stockController.addStock)

router.patch('/:stockID', stockController.editStock)

router.delete('/:stockID', stockController.deleteStock)

router.get('/:stockID', stockController.getStock)

module.exports = router
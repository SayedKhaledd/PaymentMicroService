const router = require("express").Router()
const payment = require('../controllers/payment.controller')
router.get("/sendpublishablekey",  payment.sendPublishableKey)
router.post("/creditcarddata", payment.creditCardData)

module.exports = router

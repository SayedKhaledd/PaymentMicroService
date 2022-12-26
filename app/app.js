const express = require("express")
const path = require("path")
const cors = require("cors")
const app = express()
const router = require("express").Router()
const Publishable_Key = 'pk_test_51MHSKdAdItXt1UKPixMrZkq9LseAGnGdL1BCk1hi7815YXMOLI1RHf1s6DsOwd4Q6zwCzLrp8DjF7JR1JrvaHUZe00eslzqnn1'
const Secret_Key = 'Your_Secret_Key'
const paymentRoute = require("./routes/payment.route")
express.static('./public')
app.use(express.static('public'))

app.use(cors())
require("../db/connect")
app.use(express.json())


app.use("/api",  paymentRoute)






app.all("*", (req, res) => {
    res.status(404).send({
        apisStatus: false,
        message: "Invalid URL",
        data: {}
    })
})
module.exports = app
const express = require("express")
const path = require("path")
const cors = require("cors")
const app = express()
const router = require("express").Router()
const stripe = require('stripe')('sk_test_51MHSKdAdItXt1UKPNaDMAYmnlC0Mh9E1bSJLjOoLsY6SoXuj4Wy4Y8wKEOYxO66FlWqF2AAzAtWtaYsUcRUAxiUp0066UJyRWx');
const Publishable_Key = 'pk_test_51MHSKdAdItXt1UKPixMrZkq9LseAGnGdL1BCk1hi7815YXMOLI1RHf1s6DsOwd4Q6zwCzLrp8DjF7JR1JrvaHUZe00eslzqnn1'
const Secret_Key = 'Your_Secret_Key'
express.static('./public')
app.use(express.static('public'))

app.use(cors())
require("../db/connect")
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello world')
})
app.post('/payment', function (req, res) {

    // Moreover you can take more details from user
    // like Address, Name, etc from form
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken,
        // BRAND:req.body.brand,
        // cvv: req.body.cvc,
        // DATE: req.body.date,
        name: 'Gourav Hammad',
        address: {
            line1: 'TC 9/4 Old MES colony',
            postal_code: '452331',
            city: 'Indore',
            state: 'Madhya Pradesh',
            country: 'EGYPT',
        }
    })
        .then((customer) => {

            return stripe.charges.create({
                amount: 2500,     // Charging Rs 25
                description: 'Web Development Product',
                currency: 'EGP',
                customer: customer.id
            });
        })
        .then((charge) => {
            res.send("Success")  // If no error occurs
        })
        .catch((err) => {
            res.send(err)       // If some error occurs
        });
})



app.all("*", (req, res) => {
    res.status(404).send({
        apisStatus: false,
        message: "Invalid URL",
        data: {}
    })
})
module.exports = app
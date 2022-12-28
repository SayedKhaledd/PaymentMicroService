const myHelper = require("../helper")
const stripe = require('stripe')('sk_test_51MHSKdAdItXt1UKPNaDMAYmnlC0Mh9E1bSJLjOoLsY6SoXuj4Wy4Y8wKEOYxO66FlWqF2AAzAtWtaYsUcRUAxiUp0066UJyRWx');

class Payment {

    static sendPublishableKey = async (req, res) => {
        // res.sendFile('../public/index.html')
        const customers = await stripe.customers.list();
        const getCustoemrById = await stripe.customers.retrieve("cus_N1WMm1xnrpI6LK")
        res.json(getCustoemrById)
    }
    static creditCardData = async (req, res) => {
        console.log("fire?")
        stripe.customers.create({
            email: req.body.email,
            source: req.body.cardNumber,
            CVV: req.body.cvv,
            date: req.body.date,
            // name: req.body.name,
            //   address: req.body.address
        })
            .then((customer) => {
                res.send(ustomer.id)
                console.log(customer.id)
                return stripe.charges.create({
                    amount: 2500,
                    description: 'Web Development Product',
                    currency: 'EGP',
                    customer: customer.id
                });
            })
            .then((charge) => {
                console.log(charge)
                console.log("success");
                res.send("Success")
            })
            .catch((err) => {
                console.log("error");
                console.log(err);


                res.send(err)
            });
    }

}
module.exports = Payment
const myHelper=require("../helper")
const stripe = require('stripe')('sk_test_51MHSKdAdItXt1UKPNaDMAYmnlC0Mh9E1bSJLjOoLsY6SoXuj4Wy4Y8wKEOYxO66FlWqF2AAzAtWtaYsUcRUAxiUp0066UJyRWx');

class Payment{

    static sendPublishableKey=async (req, res)=>{
        const PUBLISHABLE_KEY="pk_test_51MHSKdAdItXt1UKPixMrZkq9LseAGnGdL1BCk1hi7815YXMOLI1RHf1s6DsOwd4Q6zwCzLrp8DjF7JR1JrvaHUZe00eslzqnn1"
        myHelper.resHandler(res,200,true,PUBLISHABLE_KEY,"publishable key")
    }
    static creditCardData=async (req, res)=>{
        

    stripe.customers.create({
        email: req.body.email,
        source: req.body.cardNumber,
         CVV: req.body.cvv,
         date: req.body.date,
       // name: req.body.name,
     //   address: req.body.address
    })
        .then((customer) => {
            return stripe.charges.create({
                amount: 2500,     
                description: 'Web Development Product',
                currency: 'EGP',
                customer: customer.id
            });
        })
        .then((charge) => {
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
module.exports=Payment
const myHelper = require("../helper")
const stripe = require('stripe')('sk_test_51MHSKdAdItXt1UKPNaDMAYmnlC0Mh9E1bSJLjOoLsY6SoXuj4Wy4Y8wKEOYxO66FlWqF2AAzAtWtaYsUcRUAxiUp0066UJyRWx');

class Articles {

    static getArticles = async (req, res) => {
        const customerID = req.body.customerID;

        try {
            const getCustoemrById = await stripe.customers.retrieve("cus_N1WMm1xnrpI6LK")

            if (!getCustoemrById) {
                res.redirect('http://localhost:3000/')
            } else {
                res.json(
                    [

                        {
                            "Article_ID": 238747234234,
                            "Artcile Ttitle": "Artcile about tech",
                            "Article content": "Article Content .....",
                            "Article Image soure": "URL",
                            "Article Authour": "AHMED RABIE",
                            "Article Crated AT": "2023/1/1"
                        },
                        {
                            "Article_ID": 238747234234,
                            "Artcile Ttitle": "Artcile about tech",
                            "Article content": "Article Content .....",
                            "Article Image soure": "URL",
                            "Article Authour": "AHMED RABIE",
                            "Article Crated AT": "2023/1/1"
                        }
                    ]
                )
            }

        } catch (e) {
            myHelper.resHandler(res, 500, false, e, e.message)
        }



    }

}


module.exports = Articles
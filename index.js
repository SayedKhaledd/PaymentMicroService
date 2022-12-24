
/*const app = require('./app/app')




app.listen(process.env.PORT||3000, () => console.log("server"))*/

let express = require('express')
var bodyParser = require('body-parser')

const app = express()
//setting our view engine to ejs

app.set('view engine','ejs')

app.get('/', (req, res)=>{
 res.render('index')
})
require("dotenv").config()
const app = require('./app/app')
app.get('/', (req, res) => {
    res.send('hello world')
})
app.listen(process.env.PORT||3000, () => console.log("server"))

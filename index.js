require("dotenv").config()
const app = require('./app/app')
app.listen(process.env.PORT||3000, () => console.log("server"))
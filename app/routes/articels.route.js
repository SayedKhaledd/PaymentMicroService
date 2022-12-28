const router = require("express").Router()
const Articles = require('../controllers/articles')

router.post("/articles",  Articles.getArticles)



module.exports = router

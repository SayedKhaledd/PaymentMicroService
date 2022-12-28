const router = require("express").Router()
const Articles = require('../controllers/articles')

router.get("/articles",  Articles.getArticles)



module.exports = router

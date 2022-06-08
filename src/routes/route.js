const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")


router.post("/createAuthor", authorController.createAuthor  )

router.post("/createBook", BookController.createBook  )


router.get("/getBooksData", BookController.getBooksData)


router.put("/findAuthor", BookController.findAuthor)


router.get("/findBookWithAuthor", BookController.findBookWithAuthor)

router.get("/bookByAuthorid/:author_id", BookController.booksbBy_authorid)

router.get("/authorsName",BookController.authorsName)

module.exports = router;
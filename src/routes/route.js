const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")


router.post("/createAuthor", authorController.createAuthor  )

router.post("/createBook", BookController.createBook  )


router.get("/getBooksData", BookController.getBooksData)


router.put("/findAuthor", BookController.findAuthor)


router.get("/findBookWithAuthor", BookController.findBookWithAuthor)

module.exports = router;
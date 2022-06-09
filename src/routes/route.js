const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const publisherController = require("../controllers/publisherController")
const bookController= require("../controllers/bookController")


router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.
getAuthorsData)

router.post("/createPublisher", publisherController.createPublisher  )

router.get("/getPublisherData", publisherController.
getPublisherData)



router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.put("/books",bookController.updateBook);
router.put("/updateBook1", bookController.updateBook1)

module.exports = router;
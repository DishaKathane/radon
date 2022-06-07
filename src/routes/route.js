const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createBook", BookController.createBook  )

router.get("/bookList", BookController.giveAllBooks )
router.post("/getBooksInYear", BookController.getBooksInYear  )

router.get("/getPartiCularBook", BookController.getPartiCularBook
)

router.get("/getXINRBooks", BookController.getXINRBooks)

router.get("/getRandomBooks", BookController.getRandomBooks)




module.exports = router;
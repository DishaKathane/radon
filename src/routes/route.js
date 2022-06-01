const express = require('express');
const externalModule = require('./logger');

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('the constant in logeer file has balue '+ externalModule.url);
    console.log("the current batch is "+ externalModule.cohort)
    externalModule.log()
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My first  ever api! with self trying ')
});

router.get('/test-me2', function (req, res) {
    res.send('My first ever api! with self trying on second time ind im really enthuciastic to see the result')
});

router.get('/test-me3', function (req, res) {
    res.send('My first ever api! im happy to for the result')
});


module.exports = router;
// adding this comment for no reason
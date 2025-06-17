const express = require('express');
const {getForm , setForm} = require("../controllers/FormController")

const router = express.Router();

router.post('/setform',setForm)

router.get('/setform',getForm)

module.exports = router;
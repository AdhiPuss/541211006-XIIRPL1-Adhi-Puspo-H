
const express = require('express')
const router = express.Router()

const usercontroller = require('../controllers/users')

let users = [
    {id: 1, nama: "Adhi", email: "adhi@gmail.com"},
    {id: 2, nama: "Edina", email: "Edina@gmail.com"},
]

router.get('/users', usercontroller.index)

router.post('/user', usercontroller.store)

router.put('/user/:id', usercontroller.update)

router.delete('/user/:id', usercontroller.delete)

  module.exports = router

const express = require('express')
const router = express.Router()

const users = [
    {id: 1, nama: "Adhi", email: "adhi@gmail.com"},
    {id: 2, nama: "Edina", email: "Edina@gmail.com"},
]

router.get('/users', (req, res) => {
    res.json(users)
  })

router.post('/user', (req, res) => {
    users.push(req.body)
    res.json(users)
})

router.put('/user/:id', (req, res) => {
    res.send('Got a PUT request at /user')
})

router.delete('/user/:id', (req, res) => {
    res.send('Got a DELETE request at /user')
  })

  module.exports = router

const express = require('express')
const router = express.Router()

router.get('/users', (req, res) => {
    res.send('Got All Users!!')
  })

router.post('/user', (req, res) => {
    res.send('Got a POST request')
})

router.put('/user/:id', (req, res) => {
    res.send('Got a PUT request at /user')
})

router.delete('/user/:id', (req, res) => {
    res.send('Got a DELETE request at /user')
  })

  module.exports = router

const express = require('express')
const router = express.Router()

let users = [
    {id: 1, nama: "Adhi", email: "adhi@gmail.com"},
    {id: 2, nama: "Edina", email: "Edina@gmail.com"},
]

router.get('/users', (req, res) => {
    if(users.length > 0){
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url
        })
    }else{
        res.json({
            status: false,
            message: "Data masih kosong"
        })
    }
    res.json(users)
  })

router.post('/user', (req, res) => {
    users.push(req.body)
    res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
        message: "Data berhasil ditambahkan"
    })
    res.json(users)
})

router.put('/user/:id', (req, res) => {
    const id = req.params.id
    users.filter(user => {
        if(user.id == id){
            user.nama = req.body.nama
            user.email = req.body.email
            return user
        }
    })
    res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
        message: "Data berhasil diubah"
    })
})

router.delete('/user/:id', (req, res) => {
    const id = req.params.id
    users = users.filter(user => user.id != id)

    res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
        message: "Data berhasil dihapus"
    })
  })

  module.exports = router
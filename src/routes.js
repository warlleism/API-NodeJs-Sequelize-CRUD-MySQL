const express = require('express')
const Router = express.Router()
const UserController = require('./controller/UserController')

Router.post('/create', UserController.createUser)
Router.get('/read/:id', UserController.userListing)
Router.get('/read', UserController.userListingAll)
Router.put('/update/:id', UserController.updateUser)
Router.delete('/delete/:id', UserController.deleteUser)

module.exports = Router
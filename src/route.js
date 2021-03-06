const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req,res) => res.render("index", {page: 'create-pass'}))

route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

// Formato que o form dentro da modal tem que passar a info
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create-room', RoomController.create)

route.post('/questions/create/:room', QuestionController.create)

module.exports = route
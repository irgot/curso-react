const mongoose = require('mongoose')

// Se necessário descomentar
mongoose.Promise = global.Promise 
module.exports = mongoose.connect('mongodb://localhost/todo',{useNewUrlParser: true, useUnifiedTopology: true})


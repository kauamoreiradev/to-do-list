const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/todolist', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectando ao mongoDB'))
    .catch((err) => console.log(`Erro: ${err}`))
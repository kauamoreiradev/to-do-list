const express = require("express");
const path = require('path')

const checklistRouter = require('./src/routes/checklist')
const taskRouter = require('./src/routes/task')
const rootRouter = require('./src/routes/index')
const methodOverRide = require('method-override')

require('./config/database')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(methodOverRide('_method', { methods: ['POST', 'GET'] }))

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.use('/checklists', checklistRouter);
app.use('/checklists', taskRouter.checklistDependent);
app.use('/', rootRouter);
app.use('/tasks', taskRouter.simple)

app.listen(3000, () => {
  console.log("servidor foi iniciado");
});

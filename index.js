const express = require('express')
const path = require('path')
const catRoutes = require('./routes/cats')
const testRoutes = require('./routes/test')
const exphbs = require('express-handlebars')
const mdl = require('./middlewares')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(catRoutes)
app.use(testRoutes)

app.get('/users', mdl.logger, (req, res) => {
    res.send('User List')
})

app.listen(PORT, () => {
    console.log('Server is running')
})

const express = require('express')
const {Router} = require('express')
const path = require('path')
const router = Router()
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

router.get('/',(req,res) => {
    res.render('home', {
        isHome: true
    })
})

router.get('/test', (req,res) => {
    res.render('test', {
        title: 'testList',
        isTest: true,
    })
})

router.get('/remove/:name', (req, res) => {
    const name = req.params.name

    catList = catList.filter(function(el) { return el.name != name; });

    res.redirect('/test')
})

module.exports = router
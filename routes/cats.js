const {Router, application} = require('express')
const router = Router()
const mdlw = require('../middlewares')

var catList = [{name: 'Baltas'}, {name: 'Suskis'}, {name: 'Pienius'}]

router.use(mdlw.logger)

router.get('/', (req, res) => {
    res.render('home', {
        isHome: true
    })
})

router.get('/cats', mdlw.requestTime, mdlw.requestURL, (req, res) => {
    res.render('cats', {
        title: 'Cat List',
        isCats: true,
        catList
    })
})

router.get('/remove/:name', (req, res) => {
    const name = req.params.name

    catList = catList.filter(function(el) { return el.name != name; });
    
    res.redirect('/cats')
})

module.exports = router
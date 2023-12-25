const express = require('express')
const expressHandlebars = require('express-handlebars').engine;
const app = express()

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'fpt2',
}))

app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000
app.get('/', (req, res) => res.render('fpt2_home'))
app.get('/about', (req, res) => res.render('fpt2_about'))

const products = [
    { name: 'Product1', image: '/img/images.png' },
    { name: 'Product2', image: '/img/images.png' },
    { name: 'Product3', image: '/img/images.png' },

];

app.get('/product', (req, res) => res.render('fpt2_product', { products: products }))

app.use((req, res) => {
    res.status(404)
    res.render('404')
})

app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, () => console.log(`Express started on http://localhost:${port};` 
))
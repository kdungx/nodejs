const express = require('express')
const expressHandlebars = require('express-handlebars').engine;
const fortune = require('./lib/fortune.js')
const app = express()


//configure Handlebars view engine 

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))
app.set('view engine','handlebars')

const port = process.env.PORT ||3000
app.use(express.static(__dirname + '/public'))

app.get('/home',(req,res)=>res.render('home'))

app.get('/about', (req, res) => {
    res.render('about', { fortune: fortune.getFortune(), title: 'about' });
});

//custom 404 page

app.use((req,res)=> {
    res.status(404)
    res.render('404')

})
//custom 500 page
app.use((err,req,res,next)=> {
    console.error(err.message)
    res.status(500)
    res.render('500')
})
app.listen(port, () =>console.log(
    `express started on http://localhost:${port}` +
    `;press Ctrl-C to terminate.`
))
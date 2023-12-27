const express= require('express')
const app = express()
const turs=[
    {id:0,name:'Hood River',price:99.99},
    {id:1,name:'Oregon Coast',price:149.95}
]

app.get('/api/tours',(req,res)=>res.json(turs))


app.get('*',(req,res)=>res.send('Check out "<a href="/api/tours">/api/tours</a>"page!'))


const port = process.env.PORT || 3000
app.listen(port,()=>console.log(`\nnavigate to http://localhost: ${port}/api/tours\n`))
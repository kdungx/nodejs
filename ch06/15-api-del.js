const express= require('express')
const bodyParser= require('body-parser')
const app = express()

app.use(bodyParser.json())

const tours=[
    {id:0,name:'Hood River',price:99.99},
    {id:1,name:'Oregon Coast',price:149.95}
]

app.get('/api/tours',(req,res)=>res.json(tours))

app.put('/api/tours/:id',(req,res)=>{
    const idx = tours.findIndex(tours=>tours.id === parseInt(req.params.id))
    if(idx<0) return res.json({error: 'no such tour exists'})
    tours.splice(idx,1)
    res.json({success: true})
})


app.get('*',(req,res)=>res.send('<p>Use a tool like <a href="https://www.getpostman.com/>Postman</a>'+
`or <a href="https://curl.haxx.se/">curl</a>to try the following:</p>`+
`<pre>`
+`GET/api/tours\n`
+ `DELETE /api/tours\n` +
`GET/api/tours`))


const port = process.env.PORT || 3000
app.listen(port,()=>console.log(`\nnavigate to http://localhost: ${port}\n`))
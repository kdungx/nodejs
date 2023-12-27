const express= require('express')
const app = express()
const turs=[
    {id:0,name:'Hood River',price:99.99},
    {id:1,name:'Oregon Coast',price:149.95}
]

app.get('/api/tours',(req,res)=>{
    const toursXml ='<?xml version="1.0"?><tours>'+
    turs.map(p=>
       `<tour price="${p.price}" id="${p.id}">${p.name}</tour>` ).join('\n')
res.format({
    'application/json':()=>res.json(turs),
    'application/xml':()=>res.type('application/xml').send(toursXml),
    'text/xml':()=>res.type('text/xml').send(toursXml),
    'text/plain':()=>res.type('text/plain').send(toursXml)
})
})


app.get('*',(req,res)=>res.send('Check out "<a href="/api/tours">/api/tours</a>"page!'))


const port = process.env.PORT || 3000
app.listen(port,()=>console.log(`\nnavigate to http://localhost: ${port}/api/tours\n`))
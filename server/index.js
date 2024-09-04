const express = require('express');
const app =express()
app.use(express.json);

app.get('/', (req,res)=>{
    res.json({ message: 'Hello from the server!' });
})

app.listen(4000);
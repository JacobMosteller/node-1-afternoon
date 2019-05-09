const express = require('express');
const products = require('../producst.json');

const app = express();

const port = 7000

app.get('/api/products', (req, res)=>{
    res.status(200).send(products)
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});
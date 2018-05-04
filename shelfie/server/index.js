const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();

const app = express();
const port = 3005;

app.use(bodyParser.json());

massive().then(dbInstance=>{
    app.set('db', dbInstance)
})

app.get('/api/inventory', controller.readInventory)
app.post('/api/product', controller.addProduct)
app.delete('/api/product/:product_id', controller.deleteProduct)
app.put('/api/product/:product_id', controller.updateProduct)

app.listen(port, ()=> console.log(`Port ${port} now listening`))
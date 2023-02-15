const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
var cartController = require('./Controllers/cart.js')
var orderController = require('./Controllers/order.js')
const app = express()
const cors=require('cors')

 app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('tiny'))
app.use(cors())



app.listen(3000, () => {
console.log('Server running on http://localhost:3000');
});

app.use('/cart', cartController)
app.use('/order', orderController)

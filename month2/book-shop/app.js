const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.PORT);
app.use(express.json());
console.log('server port: ' + process.env.PORT);

let usersRouter = require('./routes/users');
let booksRouter = require('./routes/books');
let categoryRouter = require('./routes/category');
let likesRouter = require('./routes/likes');
let cartsRouter = require('./routes/carts');
let ordersRouter = require('./routes/orders');

app.use('/users', usersRouter);
app.use('/books', booksRouter);
app.use('/category', categoryRouter);
app.use('/likes', likesRouter);
app.use('/carts', cartsRouter);
app.use('/orders', ordersRouter);

let ev = require('express-validator');
let jwt = require('jsonwebtoken');
let mysql2 = require('mysql2');


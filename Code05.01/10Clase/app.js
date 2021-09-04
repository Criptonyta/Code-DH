const express = require('express');
const app = express();

const routes = require('../10clase/routers/main')

const path = require ('path');
app.use(express.static(path.resolve(__dirname,'./public')));

app.listen(3000, () => {
    console.log('Servidor funcionando');
});

const router = express.Router();

app.use('/', routes);
    
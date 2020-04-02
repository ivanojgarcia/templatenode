'use strict'

const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/routes');
const clientes = require('./routes/clientes');
const auth = require('./routes/auth');

const app = express();

// Settings: configuraciones asociadas al servidor
app.set('port', process.eventNames.PORT || 5000)
app.set('json spaces', 2)

// Middlewares para el funcionamiento o librerias extras
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.listen(app.get('port'), () => {
    console.log(`Server on PORT::::${app.get('port')}`)
});

// Routes: llamada de las rutas a utilizar en general
app.use('/api/v1',routes);
app.use('/api/v1/Clientes',clientes);
app.use('/api/v1/auth',auth);



module.exports = app;
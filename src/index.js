const express = require('express');
const app = express();
const morgan = require('morgan');

//definicion del puerto
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//rutas
app.use('/api/users',require('../routes/users'));

//serverListened
app.listen(app.get('port'), () => {
    console.log('server is listened in: '+app.get('port'));
});
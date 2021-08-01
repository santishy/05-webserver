const express = require('express')
require('dotenv').config();
var hbs = require('hbs');
const app = express()
const port = process.env.PORT;
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));


hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.get('/', (req, res) => {
    res.render('home',{
        title:'Curso node',
        name:'Express'
    });
})
app.get('/generic', (req, res) => {
    res.render('generic',{
        title:'Curso node',
        name:'Express'
    });
})
app.get('/elements', (req, res) => {
    res.render('elements',{
        title:'Curso node',
        name:'Express'
    });
});
app.listen(port);
const express = require('express');
const app = express();
const ejs = require('ejs');
const favicon = require('serve-favicon');
const path = require('path');
const elayouts = require('express-ejs-layouts');
const PORT = process.env.PORT || 3300;

//Assets
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('home');
})
const faviconPath = path.join(__dirname, 'public', 'favicon.ico');


app.use(favicon(faviconPath));
//set template engine
app.use(elayouts);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs')

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
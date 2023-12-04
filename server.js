const express = require('express');
const app = express();
const ejs=require('ejs');
const path = require('path');
const elayouts=require('express-ejs-layouts');
const PORT = process.env.PORT || 3300;

app.get('/', (req, res) => {
    res.render('home');
})

//set template engine
app.use(elayouts);
app.set('views', path.join(__dirname,'/resources/views'));
app.set('view engine','ejs')

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
const express = require('express');
const port = process.env.PORT || 7000;
const app = express();
app.use(express.static('public'));

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/about', (req, res) => {
    res.render('partial/about')
});

app.get('/footer', (req, res) => {
    res.render('partial/footer')
});

app.get('/contact', (req, res) => {
    res.render('contact')
});

app.listen(port, () => {
    console.log(`server start on ${port}`);
})
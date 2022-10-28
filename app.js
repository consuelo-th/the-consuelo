const express = require('express');
const app = express();


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json())

app.get('/', function(req, res) {
     res.render("pages/index")
     
});


app.get('/design', (req, res) => {
     res.render('pages/design')
})

app.get('/register', (req, res) => {
     res.render('pages/register')
})

app.get('/login', (req, res) => {
     res.render('pages/login')
})

app.get('/reset', (req, res) => {
     res.render('pages/reset')
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

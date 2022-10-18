const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// set the view engine to ejs
app.use(express.static('public'))
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
     res.render("pages/index")
});

// about page
app.get('/dashboard', function(req, res) {
     res.send('You just logged in')
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
const express = require('express');
const app = express();
const dashboardRouter = require('./routes/dashboard')
const { users, ROLE } = require('./data');
const {authUser, authRole} = require('./basicAuth')


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json())
app.use(setUser)
// app.use('/dashboard', dashboardRouter);

app.get('/', function(req, res) {
     res.render("pages/index")
     
});

app.get('/design', (req, res) => {
     res.render('pages/design')
})

app.get('/register', (req, res) => {
     res.render('pages/register')
})


function setUser(req, res, next) {
     const userId = req.body.userId
     if (userId) {
       req.user = users.find(user => user.id === userId)
       
     }

     next()
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

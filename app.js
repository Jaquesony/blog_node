const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');



// Express app
const app = express();


// connect to mongodb
// mongoose.set('strictQuery', true)
const dbURI = 'mongodb+srv://jaqueson:J1691997j@nodetuts.ribf4go.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

// register ejs
app.set('view engine', 'ejs')


// To middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
});

// blog routes
app.use('/blogs',blogRoutes);


// 404 Not found
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
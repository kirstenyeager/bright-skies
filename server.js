const express = require('express');
const axios = require('axios')
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
	var now = new Date().toString();

	var log =`${now}: ${req.method} ${req.url}`;
	console.log(log);
	fs.appendFile('server.log', log + '\n', (err) => {
		if (err) {
			console.log('Unable to append to server.log.')
		}
	})
	next();
});
// app.use((req, res, next) => {
// 	res.render('maintenance.hbs', {
// 		pageTitle: 'Maintenance Page'
// 	});
// })
hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
});

app.get('/', (req, res) =>{
	res.render('home.hbs', {
		pageTitle: 'Home Page',
		welcomeMessage: 'Get the weather!'
	});
});
app.get('/home', (req,res) => {
	res.render('home.hbs', {
		pageTitle: 'Home Page',
		welcomeMessage: 'Get the weather!'
	});
});

app.get('/help', (req,res) => {
	res.render('help.hbs', {
		pageTitle: 'Help',
		welcomeMessage: 'Looks like you need help!'
	});
});
app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About Page'
	});
});

app.get('/bad', (req, res) => {
	res.send({
		errorMessage:'bad request'
	});
})

app.listen(port, () => {
	console.log(`Server is listening on port ${port}.`);
});

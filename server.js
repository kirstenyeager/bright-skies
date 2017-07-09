
const axios = require('axios')
const hbs = require('hbs');
const fs = require('fs');
const socketIO = require('socket.io');
const cors = require('cors');

const http = require('http');

const express = require('express')
, app = express()
, server = http.createServer(app);

var io = socketIO(server);

app.use(express.static(__dirname + '/app'), cors());
//app.set('port', process.env.PORT || 3000);
//app.use(proxy('/service', 'http://localhost:8080'));

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
	console.log('New user connected');

socket.on('disconnect', () => {
			console.log('user disconnected'); 
		});
});


//create web pages with hbs
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));


//append log
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

app.get('/home', (req, res) =>{
	res.render('home.hbs', {
		pageTitle: 'Home Page',
		welcomeMessage: 'Get the weather!'
	});
});

app.get('/projects', (req,res) => {
	res.render('projects.hbs', {
		pageTitle: 'Projects Page',
		welcomeMessage: 'Our projects!'
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
});

server.listen(port, () => {
	console.log(`Server is listening on port ${port}.`);
});

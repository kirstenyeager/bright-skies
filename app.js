const yargs = require('yargs');
const axios = require('axios');

// const argv = yargs                          //in the command line the options to type are 'a', 'help', 'h' and 'argv'
// .options({
// 	a: {
// 		demand: false,
// 		alias: 'address',
// 		describe: 'Address to get weather for',
// 		string: true,
// 	}
// })
// .help()
// .alias('help', 'h')
// .argv;

// function weather() {
// if (address) {
// 	var encodedAddress = encodeURI(argv.address);
// } else {
// 	var encodedAddress = encodeURI('33176');
// }
// var geocodedUrl = `https://maps.googleapis.com/maps/api/geocode/json?&address=${encodedAddress}`;
// axios.get(geocodedUrl).then((response) => {
// 	if (response.data.status === 'ZERO_RESULTS') {
// 		throw new Error('Unable to find the address.');
// 	}
// 	var lat = response.data.results[0].geometry.location.lat;
// 	var lng = response.data.results[0].geometry.location.lng;
// 	var weather =`https://api.darksky.net/forecast/48c82fb555848b47af534fa60c40d3da/${lat},${lng}`;
// 	console.log(`Address: ${response.data.results[0].formatted_address}`);
// 	return axios.get(weather);
// }).then((resp) => {
// 	console.log(`Summary: ${resp.data.currently.summary}`);
// 	console.log(`Temperature: ${resp.data.currently.temperature}`);
// 	console.log(`Humidity: ${resp.data.currently.humidity}`);
// 	console.log(`Cloud Cover: ${resp.data.currently.cloudCover}`);
// }).catch((e) => {
// 	if (e.code === 'ENOTFOUND') {
// 		console.log('Unable to connect to API servers.');
// 	} else {
// 		console.log(e.message);
// 	}
// });
// };
module.exports = require('./lib/axios');


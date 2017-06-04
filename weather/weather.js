const request = require('request');

var getWeather = (lat, lng, callback) => {
request({
url:`https://api.darksky.net/forecast/48c82fb555848b47af534fa60c40d3da/${lat},${lng}`,
	json: true
}, (error, response, body) => {
	if(!error) {
		callback(undefined, {
			temperature: body.currently.temperature,
			apparentTemperature: body.currently.apparentTemperature
			});
	} else {
		callback('Unable to fetch weather.');
	} 
	});
};
module.exports.getWeather = getWeather;
	
console.log('Starting app');

setTimeout(() => {
	console.log('Inside of callback');
}, 0);

setTimeout(() => {
	console.log('second callback');
}, 0);

console.log('Finishing up.');
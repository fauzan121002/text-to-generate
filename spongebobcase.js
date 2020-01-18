module.exports = function(value){
	let m = ''

	for(let i = 0; i < value.length; i++) m += (i % 2 !== 0) ? value[i].toUpperCase() : value[i].toLowerCase()

	return m	
}
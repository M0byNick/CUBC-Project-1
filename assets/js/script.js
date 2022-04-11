const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com',
		'X-RapidAPI-Key': '3fc69c7541msh2095ea3bf50e2f3p1ece8ajsnf47a3cdc9c68'
	}
};

fetch('https://hotels-com-provider.p.rapidapi.com/v1/destinations/search?query=London&currency=USD&locale=en_US', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
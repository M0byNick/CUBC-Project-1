const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://hotels-com-provider.p.rapidapi.com/v1/hotels/search?checkin_date=2022-03-26&checkout_date=2022-03-27&sort_order=STAR_RATING_HIGHEST_FIRST&destination_id=1708350&adults_number=1&locale=en_US&currency=USD&children_ages=4%2C0%2C15&price_min=10&star_rating_ids=3%2C4%2C5&accommodation_ids=20%2C8%2C15%2C5%2C1&price_max=500&page_number=1&theme_ids=14%2C27%2C25&amenity_ids=527%2C2063&guest_rating_min=4",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
		"X-RapidAPI-Key": "3fc69c7541msh2095ea3bf50e2f3p1ece8ajsnf47a3cdc9c68"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});


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
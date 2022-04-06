const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'best-booking-com-hotel.p.rapidapi.com',
		'X-RapidAPI-Key': '77e0df06dbmshc3b749f3ded1311p10bac6jsn8c880aa66914'
	}
};

fetch('https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation?cityName=Berlin&countryName=Germany', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
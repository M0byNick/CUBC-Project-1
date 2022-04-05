//const axios = require("axios");
/*
const options = {
  method: 'GET',
  url: 'https://compare-flight-prices.p.rapidapi.com/GetPricesAPI/GetPrices.aspx',
  params: {SearchID: '<REQUIRED>'},
  headers: {
    'X-RapidAPI-Host': 'compare-flight-prices.p.rapidapi.com',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
*/
fetch('https://api.travelpayouts.com/v2/prices/latest?', {
    'X-Access-Token': '321d6a221f8926b5ec41ae89a3b2ae7b',
		'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
		'X-RapidAPI-Key': '6c94d0fd0bmsh4df91858ee5e41cp1e51f2jsnc1e1291d77bb',
    'Access-Control-Allow-Origin': 'no-cors'
})
.then(function(response){
    return response.json()
    
})
.then(function(data)
{
    console.log(data)
})
//Bulma documentation provided JS code for navbar toggle to make navbar responsive for mobile screens
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });


  
// Replace hard coded London with whatever the user inserts 
// var userInput = 'London'
var getHotels = function(userInput) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com',
      'X-RapidAPI-Key': '3fc69c7541msh2095ea3bf50e2f3p1ece8ajsnf47a3cdc9c68'
    }
  };

  // Call the hotels.com API with input from the user search
  fetch('https://hotels-com-provider.p.rapidapi.com/v1/destinations/search?query=' + userInput + '&currency=USD&locale=en_US', options)
	.then(response => response.json())
	.then(response => 
    //Do what we want
    { for (let i = 0; i < response.suggestions[1].entities.length; i++) {
        console.log(response.suggestions[1].entities[i].name);
        
        var hotelName = response.suggestions[1].entities[i].name;
      }
    })
// create list item

    //dO WhAt YOu WaNt
	.catch(err => console.error(err))
}



const FOURSQUARE_SEARCH_URL = 'https://api.foursquare.com/v2/venues/explore?&client_id=ORUJ135RS041OSMLKEAGTT0RKIY3Y5YJ2TYH02WXTELUJQBB&client_secret=UBA21UJ3MNOZAWVKYXPHHXTYDQD0HZXXL0HWIIKRLHH5M0TU&v=20180417';

function getDatafromFoursquare(searchTerm, callback) {
  const settings = { 
    url: FOURSQUARE_SEARCH_URL, 
    data: {
      near: `${searchTerm}`,
      radius: 80000,
      query: 'gym / fitness center',
      limit: 25
    },
    dataType: 'json', 
    type: 'GET', 
    success: callback
  }; 
  $.ajax(settings); 
}


 

function renderResult(result) {

	console.log(result); 

	let venueName = result.venue.name;
    venueName = venueName.replace(/["'()]/g,"");
    venueName = venueName.replace(/&/g, "");

  

    let venueAddress1 = result.venue.location.formattedAddress[0];
    let venueAddress2 = result.venue.location.formattedAddress[1];
    
    venueAddress1 = venueAddress1.replace(/["'()&]/g,"");
    venueAddress2 = venueAddress2.replace(/["'()&]/g,"");
    venueAddress3 = venueAddress1 + " " + venueAddress2;

    let venueRating = result.venue.rating; 
    let venueUrl = result.venue.url; 


  return `
  <div class="single-venue-result">
  	<h2 class="result-name">${result.venue.name}</h2>
  	<span class="icon">
       	<img src="${result.venue.categories[0].icon.prefix}bg_32${result.venue.categories[0].icon.suffix}" alt="category-icon">
    </span>
    <p class="result-rating">${result.venue.rating}</p>
  	<p class="result-address">${result.venue.location.formattedAddress[0]}</p>
  	<p class="result-address">${result.venue.location.formattedAddress[1]}</p>
  	<a href="${result.venue.url}" class="result-url">${result.venue.url}</a>
  	<button type="submit" aria-label="search" data-address="${venueAddress3}" id = ${venueName} data-rating="${venueRating} data-url = "${venueUrl}"class="saveGym-button">Save</button>
  </div>`; 
}

function displayFoursquareData(data) {
  const results = data.response.groups[0].items.map((item, index) =>
  renderResult(item)); 
  $('.js-search-results').html(results);
  $('.saveGym-button').on('click', function(event) {
  		event.preventDefault(); 
  		var e = window.event,
  		btn = e.target || e.srcElement; 
  		const gymTitle = btn.id; 
  		const rating = btn.getAttribute('data-rating'); 
  		const address = btn.getAttribute('data-address'); 
  		const url = btn.getAttribute('data-rating'); 
  		addNewGym(gymTitle, address, url); 
  }) 
}

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault(); 
    const queryTarget = $(event.currentTarget).find('.js-query'); 
    const query = queryTarget.val(); 
    queryTarget.val(""); 
    getDatafromFoursquare(query, displayFoursquareData); 
  }); 
}

function activatePlacesSearch() {
	let options = {
		types: ['(regions)']
	}; 
	let input = document.getElementById('search-term'); 
	let autocomplete = new google.maps.places.Autocomplete(input, options); 
}



$(watchSubmit); 
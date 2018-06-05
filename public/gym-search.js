const FOURSQUARE_SEARCH_URL =  "GET https://api.foursquare.com/v2/venues/explore"; 
const CLIENT_ID = "ORUJ135RS041OSMLKEAGTT0RKIY3Y5YJ2TYH02WXTELUJQBB"; 
const CLIENT_SECRET = "UBA21UJ3MNOZAWVKYXPHHXTYDQD0HZXXL0HWIIKRLHH5M0TU";

function GetDataFromFoursquare(searchTerm, callback) {
	const query = {
		client_id: CLIENT_ID, 
		client_secret: CLIENT_SECRET, 
		near: `${searchTerm}`, 
		qeury: 'Gym / Fitness Center', 
		limit: 25
	};
	$.getJSON(FOURSQUARE_SEARCH_URL, query, callback); 
}

function renderResult(result) {
	return `
	<div class='gym-search-results'>
		<div class="result-image" style="background-image: url(https://igx.4sqi.net/img/general/width960${result.venue.photos.groups[0].items[0].suffix})" ;>
        </div>
        <h2>${result.venue.name}</h2>

	</div>


	`; 
}

function displayFoursquareData(data) {
	const results = data.items.map((item, index) =>renderResult(item)); 
	$('.js-search-results').html(results); 

	$('.js-search-results')
		.prop('hidden', false)
		.html(results); 
}

function watchSubmit() {
	$('.js-search-form').submit(event => {
		event.preventDefault(); 
		const query = $(event.currentTarget).find('.js-query'); 
		const query = queryTarget.val();
		queryTarget.val(""); 
		GetDataFromFoursquare(query, displayFoursquareData);  
	}); 
}

$(watchSubmit); 


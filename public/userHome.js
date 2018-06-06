var MOCK_GYM_REVIEWS = {
	"gymReviews" : [
	{
		"id" : "1111111", 
		"name" : "Gold's Gym", 
		"location" : "4203 Idaho St. San Diego, CA 92104",
		"rating" : 5,
		"url" : "www.goldsgym.com"   
		"content" : "A good place to workout"
	}, 
	{
		"id" : "2222222", 
		"name" : "24 Hour Fitness", 
		"location" : "1234 Cherry Lane San Diego, CA 92104",
		"rating" : 2,
		"url" : "www.goldsgym.com"  
		"content" : "too crowded"
	}, 
	{
		"id" : "3333333", 
		"name" : "LA Fitness", 
		"location" : "4444 Ocean Ave. Chula Vista, CA 91910",
		"rating" : 4,
		"url" : "www.goldsgym.com"  
		"content" : "very clean"
	}, 
	{
		"id" : "4444444", 
		"name" : "Soul Cycle", 
		"location" : "5534 La Jolla Village Dr. La Jolla, CA 92122",
		"rating" : 4, 
		"url" : "www.goldsgym.com" 
		"content" : "Jenna is the best teacher"
	}

	]
}

function getSavedWorkouts(callbackFn) {
	setTimeout(function() {callbackFn(MOCK_WORKOUTS)}, 1); 
}



function displaySavedWorkouts(data) {
	for (index in data.gymReviews) {
		$('.container').append(
			'<li>' + data.gymReviews[index].name + '</li> <br>' 
			'<button id="${data.gymReviews[index].id}" class="delete-btn">Delete</button>'
			'<button id={data.workOuts[index].id" class= "edit-btn"}>Edit</button>'
 <div id="raw-data" hidden>${JSON.stringify(data.gymReviews[index])}</div>
			); 
	}
}

$(document).on('click', 'edit-btn', function (event) {
	window.localStorage.setItem('workOut', $(this).siblings('#raw-data').text())
	window.location='/editGym.html';
})
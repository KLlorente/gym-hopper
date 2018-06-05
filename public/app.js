var MOCK_GYM_REVIEWS = {
	"gymReviews" : [
	{
		"id" : "1111111", 
		"name" : "Gold's Gym", 
		"location" : "4203 Idaho St. San Diego, CA 92104",
		"rating" : 5,  
		"content" : "A good place to workout"
	}, 
	{
		"id" : "2222222", 
		"name" : "24 Hour Fitness", 
		"location" : "1234 Cherry Lane San Diego, CA 92104",
		"rating" : 2, 
		"content" : "too crowded"
	}, 
	{
		"id" : "3333333", 
		"name" : "LA Fitness", 
		"location" : "4444 Ocean Ave. Chula Vista, CA 91910",
		"rating" : 4, 
		"content" : "very clean"
	}, 
	{
		"id" : "4444444", 
		"name" : "Soul Cycle", 
		"location" : "5534 La Jolla Village Dr. La Jolla, CA 92122",
		"rating" : 4, 
		"content" : "Jenna is the best teacher"
	}

	]
}


function getGymReviews(callbackFn) {
	setTimeout(function() {callbackFn(MOCK_GYM_REVIEWS)}, 100); 
}

function displayGymReviews(data) {
	for (index in data.gymReviews) {
		$('body').append(
			'<p>' + data.gymReviews[index].name + '</p>'); 
	}
}

function getAndDisplayGymReviews() {
	getGymReviews(displayGymReviews); 
}

$(function() {
	getAndDisplayGymReviews(); 
})

//log-in form

$('.login-form').on('submit', event => {
	event.preventDefault(); 

	let username = $('.username').val(); 
	let password = $('.passord').val(); 

	.ajax({
		method: 'POST', 
		url: '/login', 
		data: JSON.stringify({username, password}), 
		contentType: 'application/json', 
		dataType: 'json', 
		error: function(object, message, string){
			console.log(object); 
			if (object.status ===401){
				$('.login-feedback').show(); 
			}
		}, 

		success: response => {
			console.log(response.authToken, response.userId)
			sonsole.log("success")
			localStorage.setItem('token', response.authToken)
			localStorage.setItem('userId', resonse.uderId)
			window.location = "userHome.html"
		}
	})
}); 



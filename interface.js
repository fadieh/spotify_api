$('#fetch-albums').on('click', function(){
	var genre = $('#genre-name').val();
	var bpm = $('#bpm').val();
	// var key = $('#key').val();
	var source = $('#results-template').html();
	var template = Handlebars.compile(source);
	$.get('http://developer.echonest.com/api/v4/song/search?api_key=1APOSNTGKZWRQN06B&style=' + genre + '&min_danceability=0.35&min_tempo=' + bpm + '&song_min_hotttnesss=0.4&results=5', function(data) { 
		// console.log(data)
		$('#results').append(template(data));
	});
});
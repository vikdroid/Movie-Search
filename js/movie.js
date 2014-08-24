$(document).ready(function(){
	$('#search').on('click', function(event){
		//alert(search_txt);
		var search_txt = $('#searchbox').val();
		event.preventDefault();
		//$('#loading').html('<img src="29.gif">');
		$.ajax({
			url: "http://www.omdbapi.com/?s="+search_txt,
		  	type: "GET",
		  	crossDomain: true,
		  	dataType: "jsonp",
		  	success:function(data){
		  		//console.log(data.Search[1].Title);
		  		$('#loading ul').html('');
		  		$('#loading').html('<ul></ul>');
		  		$('#loading ul').addClass('ul');
		  		for(var i=0; i<data.Search.length; i++)
		  		{
		  			$('#loading ul').append('<li><span>Title: </span><span>'+data.Search[i].Title+'</span><br><span>Year: </span>'+data.Search[i].Year+'<br><span>Type: </span>'+data.Search[i].Type+'</li>');
		  		}
		  	}
		})

	});

	$(document).delegate('#loading ul li', 'click', function(){
		var title = $(this).find('span:eq(1)').text();
		//console.log(title);
		$.ajax({
			url: "http://www.omdbapi.com/?t="+title,
			type: "GET",
			crossDomain: true,
			dataType: 'jsonp',
			success: function(data) {
				$('#loading').html('');
				console.log(data.Title);
				$('#loading').append('<span>Title: </span>'+data.Title+'<br><span>Year: </span>'+data.Year+'<br><span>ImdbRating: </span>'+data.imdbRating+'<br><span>Release Date: </span>'+data.Released+'<br><span>Runtime: </span>'+data.Runtime+'<br><span>Genre: </span>'+data.Genre+'<br><span>Director: </span>'+data.Director+'<br><span>Writer: </span>'+data.Writer+'<br><span>Actors: </span>'+data.Actors+'<br><span>Story: </span>'+data.Plot+'<br><span>Language: </span>'+data.Language+'<br><span>Country: </span>'+data.Country+'<br><span>Awards: </span>'+data.Awards+'<br><span>imdbVotes: </span>'+data.imdbVotes+'<br><span>Type: </span>'+data.Type+'<br>');
			}
		});

	});
});
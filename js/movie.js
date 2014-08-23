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
		  		console.log(data.Search[1].Title);
		  		$('#loading ul').addClass('ul');
		  		for(var i=0; i<data.Search.length; i++)
		  		{
		  			console.log('hi');
		  			$('#loading ul').append('<li><span>Title: </span><span>'+data.Search[i].Title+'</span><br><span>Year: </span>'+data.Search[i].Year+'<br><span>Type: </span>'+data.Search[i].Type+'</li>');
		  		}
		  	}
		})

	});
});
var dataResponse = $.getJSON('../data.json',function(){
	var data = response.responseJSON;
	$('#second-choice1').change(function(){
		var selectedPlayer = $('#second-choice1').val();
		selectedPlayer = data.elements.filter( a => a.second_name === selectedPlayer);
		console.log(selectedPlayer);

			$('#content').empty();
			var source   = $("#data-template").html();
			var template = Handlebars.compile(source);
			var html    = template(selectedPlayer);
			console.log(html);
			$('#content').append(html);

	});
});

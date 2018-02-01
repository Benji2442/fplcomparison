var dataResponse = $.getJSON('../data.json',function(){
	var data = response.responseJSON;
	$('#second-choice1').change(function(){
		var selectedPlayer = $('#second-choice1').val();
		selectedPlayer = data.elements.filter( a => a.second_name === selectedPlayer);
		// console.log(selectedPlayer);


		Handlebars.registerHelper("grandTotal", function(user_name) {
		  var grandTotal = user_name/10;
		  return grandTotal;
		});

			$('#content').empty();
			var source   = $("#data-template").html();
			var template = Handlebars.compile(source);
			var context = selectedPlayer[0];
			console.log(context);
			var html    = template(context);

			console.log(html);
			$('#content').append(html);

	});
});

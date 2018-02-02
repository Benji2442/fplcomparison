var dataResponse = $.getJSON('https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/drf/bootstrap-static',function(){
	var data = response.responseJSON;
	$('#second-choice1').change(function(){
		var selectedPlayer1 = $('#second-choice1').val();
		selectedPlayer1 = data.elements.filter( a => a.second_name === selectedPlayer1);
		// console.log(selectedPlayer);
		$('#content').empty();
		var source   = $("#data-template").html();
		var template = Handlebars.compile(source);
		var context = selectedPlayer1[0];
		console.log(context);
		var html    = template(context);
		console.log(html);
		$('#content').append(html);
	});

	$('#second-choice2').change(function(){
		var selectedPlayer2 = $('#second-choice2').val();
		selectedPlayer2 = data.elements.filter( a => a.second_name === selectedPlayer2);
		// console.log(selectedPlayer);
		$('#content2').empty();
		var source   = $("#data-template").html();
		var template = Handlebars.compile(source);
		var context = selectedPlayer2[0];
		console.log(context);
		var html    = template(context);
		console.log(html);
		$('#content2').append(html);
	});

	Handlebars.registerHelper("grandTotal", function(user_name) {
	  var grandTotal = user_name/10;  //<<<<<< FUNCTION TO DIVIDE COST/10
	  return grandTotal;
	});
});

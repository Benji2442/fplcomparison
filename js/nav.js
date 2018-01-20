$( document ).ready(function() {

	var response = $.getJSON('../data.json',function(){
		var data = response.responseJSON;
		console.log(data);


			// var teamNames = data.teams.map(function(a){ //<<<<<<<<   THIS CREATES ARRAY OF TEAMS
			// 	return a.name;
			// 	})
			// console.log(teamNames);

			html = data.teams.map(function(v,i) {
		    return '<option value="' + v.name + '">' + v.name + '</option>'
			}).join(''); //<<<<<<<<< THIS CREATES EACH OPTION ITEM

			$('#first-choice').append(html); //<<<<<<<<<< THIS ADDS THE OPTIONS TO OPTION ONE


			$('#first-choice').change(function(event){
				var selectedTeam = $('#first-choice').val();
				console.log(selectedTeam);
				var teamCode = data.teams.map(function(a){
					if(selectedTeam === a.name){
						return a.code;
					}
				});
				console.log(teamCode);
			});

	}); //<<<<< END OF VAR RESPONSE TO GET JSON
}); //<<<<<< END OF DOCUMENT.READY

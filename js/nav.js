$( document ).ready(function() {

	var response = $.getJSON('../data.json',function(){
		var data = response.responseJSON;
		console.log(data);


			// var teamNames = data.teams.map(function(a){ //<<<<<<<<   THIS CREATES ARRAY OF TEAMS
			// 	return a.name;
			// 	})
			// console.log(teamNames);

			html = data.teams.map(function(v,i) {
		    return '<option class="listItem" value="' + v.name + '">' + v.name + '</option>'
			}).join(''); //<<<<<<<<< THIS CREATES EACH OPTION ITEM

			$('#first-choice1, #first-choice2').append(html); //<<<<<<<<<< THIS ADDS THE OPTIONS TO OPTION ONE


			$('#first-choice1').change(function(event){
				var selectedTeam = $('#first-choice1').val();
				// console.log(selectedTeam);
				var teamData = data.teams.filter( a => a.name === selectedTeam);
				// console.log(teamData);
				var teamCode = teamData[0].code;
				// console.log(teamCode);   //<<<<<<<<<<<<<<  THIS IS THE SELECTED TEAMS CODE USED TO FIND PLAYERS WITH MATCHING CODE

				var playerList = data.elements.filter( a => a.team_code === teamCode);
				// console.log(playerList);  //<<<<<<<<<< THIS IS THE LIST OF PLAYERS IN THE SELECTED TEAM

				playerHtml = playerList.map(function(v,i) {
			    return '<option class="listItem" value="' + v.second_name + '">' + v.second_name + '</option>'
				}).join(''); //<<<<<<<<< THIS CREATES EACH OPTION ITEM

				$('#second-choice1').empty().append(playerHtml); //<<<<<<<<<< THIS ADDS THE PLAYERS TO OPTION TWO

			}); //<<<<< END OF .CHANGE FUNCTION FOR PLAYER 1


// THIS NEEDS CHANGING SO THAT IT ONLY USES ONE FUNCTION WITH PARAMETERS ADDED DYNAMICALLY


			$('#first-choice2').change(function(event){
				var selectedTeam = $('#first-choice2').val();
				// console.log(selectedTeam);
				var teamData = data.teams.filter( a => a.name === selectedTeam);
				// console.log(teamData);
				var teamCode = teamData[0].code;
				// console.log(teamCode);   //<<<<<<<<<<<<<<  THIS IS THE SELECTED TEAMS CODE USED TO FIND PLAYERS WITH MATCHING CODE

				var playerList = data.elements.filter( a => a.team_code === teamCode);
				// console.log(playerList);  //<<<<<<<<<< THIS IS THE LIST OF PLAYERS IN THE SELECTED TEAM

				playerHtml = playerList.map(function(v,i) {
			    return '<option class="listItem" value="' + v.second_name + '">' + v.second_name + '</option>'
				}).join(''); //<<<<<<<<< THIS CREATES EACH OPTION ITEM

				$('#second-choice2').empty().append(playerHtml); //<<<<<<<<<< THIS ADDS THE PLAYERS TO OPTION TWO

			}); //<<<<< END OF .CHANGE FUNCTION FOR PLAYER 2


	}); //<<<<< END OF VAR RESPONSE TO GET JSON
}); //<<<<<< END OF DOCUMENT.READY

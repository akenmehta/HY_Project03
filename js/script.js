var houses = {
	question1: {
		question: 'Fav food?',
		red: 'spicy',
		green: 'broccoli',
		blue: 'water',
		yellow: 'corn'
	},
	question2:{
		question: 'Fav color?',
		red: 'red',
		green: 'green',
		blue: 'blue',
		yellow: 'yellow'
	},
	question3:{
		question: 'Fav city?',
		red: 'paris',
		green: 'toronto',
		blue: 'montreal',
		yellow: 'yellowstone'
	},
	question4:{
		question: 'Fav language?',
		red: 'javscript',
		green: 'html',
		blue: 'css',
		yellow: 'scss'
	},
}
var questionCounter = 0;
var redCounter = 4;
var greenCounter = 5;
var blueCounter = 6;
var yellowCounter = 7;

var houses = [
	{
	house: 'gryffindor',
	counter: redCounter
	},
	{
	house: 'ravenclaw',
	counter: blueCounter
	},
	{
	house: 'slytherin',
	counter: greenCounter
	},
	{
	house: 'hufflepuff',
	counter: yellowCounter
	}
]

$(document).ready(function(){
	$('.house-next').on('click', function(){
		if (questionCounter < 4) {
			questionCounter++;

			$('.questions h2').text(houses['question' + questionCounter].question);
			$('label[for = "answer1"]').text(houses['question' + questionCounter].red);
			$('label[for = "answer2"]').text(houses['question' + questionCounter].green);
			$('label[for = "answer3"]').text(houses['question' + questionCounter].blue);
			$('label[for = "answer4"]').text(houses['question' + questionCounter].yellow);
			
			var userAnswer = $('input:checked').val();
			if(userAnswer === 'red')
				redCounter++;
			else if(userAnswer === 'blue')
				blueCounter++;
			else if(userAnswer === 'green')
				greenCounter++;
			else if(userAnswer === 'yellow')
				yellowCounter++;


			console.log(userAnswer, questionCounter);
			for (var i = 0; i < 4; i++) {
				finalArray.push({

				});
			}
		}
		else {
			$('body').html(`<h1>You're in Gryffindor!</h1>`)
		}
		
	});

	houses.sort(function(a,b) {
	   return b.counter - a.counter
	});

	console.log(houses[0])

});





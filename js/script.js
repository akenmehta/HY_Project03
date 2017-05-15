var questions = {
	question1: {
		question: '2. You enter an enchanted garden. What would you be most curious to examine first?',
		red: ' The statue of an old wizard with a strangely twinkling eye',
		green: 'The silver leafed tree bearing golden apples',
		blue: ' The bubbling pool, in the depths of which something luminous is swirling',
		yellow: 'The fat red toadstools that appear to be talking to each other'
	},
	question2: {
		question: '3. You and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before he will let all of you pass. Do you:',
		red: 'Volunteer to fight?',
		green: 'Let the others fight as you merrily cross the bridge.',
		blue: 'Attempt to confuse the troll into letting all three of you pass without fighting?',
		yellow: 'Suggest drawing lots to decide which of you will fight?'
	},
	question3: {
		question: '4. A Muggle confronts you and says that they are sure you are a witch or wizard. Do you:',
		red: 'Ask what makes them think so',
		green: 'Agree, and ask whether they’d like a free sample of a jinx',
		blue: 'Tell them that you are worried about their mental health, and offer to call a doctor',
		yellow: 'Agree, and walk away, leaving them to wonder whether you are bluffing'
	},
	question4: {
		question: '5. What would your family say is your worst trait?',
		red: 'Reckless – you don’t think before you act.',
		green: 'Worst trait? Really? You have no bad traits.',
		blue: 'A bit of a know-it-all.',
		yellow: 'You\'re too nice for your own good.'                                                                
	},
	question5: {
		question: '6. If you could have any superpower, which would you have?',
		red: 'Super strength or invincibility: all the better for adventuring!',
		green: 'Mind control: then everyone will do exactly what you say!',
		blue: 'The power of foresight: so you know what’s coming',
		yellow: 'Invisibility.'
	},
	question6: {
		question: '7. Which of these would be the best pet EVER?',
		red: 'A hippogriff: fierce, fast, and fearless!',
		green: 'A snake or a lizard.',
		blue: 'An owl or a phoenix: something clever.',
		yellow: 'A dog or a cat: something loyal and kind.'
	}
}
var questionCounter = 0;
var redCounter = 0;
var greenCounter = 0;
var blueCounter = 0;
var yellowCounter = 0;



$(document).ready(function(){
	$('.house-next').on('click', function(){
		if (questionCounter < 6) {
			questionCounter++;

			$('.questions h2').text(questions['question' + questionCounter].question);
			$('label[for = "answer1"]').text(questions['question' + questionCounter].red);
			$('label[for = "answer2"]').text(questions['question' + questionCounter].green);
			$('label[for = "answer3"]').text(questions['question' + questionCounter].blue);
			$('label[for = "answer4"]').text(questions['question' + questionCounter].yellow);
			
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
			console.log(redCounter, blueCounter, greenCounter, yellowCounter);
		}
		else {
			var winningHouse = [
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
			];
			winningHouse.sort(function(a,b) {
	  			return b.counter - a.counter
			});

			$('body').html(`<h1>You're in ${winningHouse[0].house.toUpperCase()}!</h1>`);

			console.log(winningHouse[0])
		}
		
	});

	

});





var houseQuestions = [
	{
		question: '2. You enter an enchanted garden. What would you be most curious to examine first?',
		red: 'The statue of an old wizard with a strangely twinkling eye',
		green: 'The silver leafed tree bearing golden apples',
		blue: 'The bubbling pool, in the depths of which something luminous is swirling',
		yellow: 'The fat red toadstools that appear to be talking to each other'
	},
	{
		question: '3. You and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before he will let all of you pass. Do you:',
		red: 'Volunteer to fight?',
		green: 'Let the others fight as you merrily cross the bridge.',
		blue: 'Attempt to confuse the troll into letting all three of you pass without fighting?',
		yellow: 'Suggest drawing lots to decide which of you will fight?'
	},
	{
		question: '4. A Muggle confronts you and says that they are sure you are a witch or wizard. Do you:',
		red: 'Ask what makes them think so',
		green: 'Agree, and ask whether they’d like a free sample of a jinx',
		blue: 'Tell them that you are worried about their mental health, and offer to call a doctor',
		yellow: 'Agree, and walk away, leaving them to wonder whether you are bluffing'
	},
	{
		question: '5. What would your family say is your worst trait?',
		red: 'Reckless – you don’t think before you act.',
		green: 'Worst trait? Really? You have no bad traits.',
		blue: 'A bit of a know-it-all.',
		yellow: 'You\'re too nice for your own good.'                                                                
	},
	{
		question: '6. If you could have any superpower, which would you have?',
		red: 'Super strength or invincibility: all the better for adventuring!',
		green: 'Mind control: then everyone will do exactly what you say!',
		blue: 'The power of foresight: so you know what’s coming',
		yellow: 'Invisibility.'
	},
	{
		question: '7. Which of these would be the best pet EVER?',
		red: 'A hippogriff: fierce, fast, and fearless!',
		green: 'A snake or a lizard.',
		blue: 'An owl or a phoenix: something clever.',
		yellow: 'A dog or a cat: something loyal and kind.'
	}
]
var wandQuestions = [
	{
		question: '2. Which career would you pursue?',
		red: 'Auror',
		green: 'Death Eater',
		blue: 'Professor',
		yellow: 'Dragon tamer'
	},
	{
		question: 'How would you describe yourself?',
		red: 'Brave, courageous, chivalrous',
		green: 'Power hungry, leader, boss',
		blue: 'Smart, hard working, focused',
		yellow: 'Kind, funny, friendly',
	},
	{
		question: 'What is your favourite kind of spell?',
		red: 'Jinxes',
		green: 'Unforgivable Curses',
		blue: 'Hexes',
		yellow: 'Charms'
	},
	{
		question: 'What is your favorite subject?',
		red: 'Transfiguration',
		green: 'Defence against the dark arts',
		blue: 'Potions',
		yellow: 'Divination'
	}
]
var petQuestions = [
	{
		question: 'What is your fav colour?',
		red: 'White',
		green: 'Silver',
		blue: 'Black',
		yellow: 'Yellow'
	},
	{
		question: 'Given a choice what would you rather do?',
		red: 'Run',
		green: 'Play with fire',
		blue: 'Fly',
		yellow: 'Eat'
	}
]
var questionCounter = 0;
var redCounter = 0;
var greenCounter = 0;
var blueCounter = 0;
var yellowCounter = 0;

function quizGenerator(quizName){
	var userAnswer = $('input:checked').val();

	if(userAnswer === 'red')
		redCounter++;
	else if(userAnswer === 'blue')
		blueCounter++;
	else if(userAnswer === 'green')
		greenCounter++;
	else if(userAnswer === 'yellow')
		yellowCounter++;

	if (questionCounter < quizName.length) {
		$('.questions h2').text(quizName[questionCounter].question);
		$('label[for = "answer1"]').text(quizName[questionCounter].red);
		$('label[for = "answer2"]').text(quizName[questionCounter].green);
		$('label[for = "answer3"]').text(quizName[questionCounter].blue);
		$('label[for = "answer4"]').text(quizName[questionCounter].yellow);
		
		questionCounter++;
		console.log(userAnswer, questionCounter);
		console.log(redCounter, blueCounter, greenCounter, yellowCounter);
	} 
}

function resetCounters(){
	questionCounter = 0;
	redCounter = 0;
	greenCounter = 0;
	blueCounter = 0;
	yellowCounter = 0;
}
$(document).ready(function(){

	$('.house-next').on('click', function(){
		if (questionCounter !== houseQuestions.length) {
			quizGenerator(houseQuestions);
		} 
		
		else{
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
			console.log(winningHouse[0]);

			resetCounters();
			console.log(questionCounter);
			console.log(redCounter, blueCounter, greenCounter, yellowCounter);
			
		}		
	});

	$('.wand-next').on('click', function(){
		if (questionCounter !== wandQuestions.length) {
			quizGenerator(wandQuestions);
		}
		else{
			var winningWand = [
				{
					wand: 'Holly and Phoenix feather',
					counter: redCounter
				},
				{
					wand: 'Hornbeam and Dragon heartstring',
					counter: blueCounter
				},
				{
					wand: 'Elder and Basilisk fang',
					counter: greenCounter
				},
				{
					wand: 'Maple and Troll whisker',
					counter: yellowCounter
				}
			];
			winningWand.sort(function(a,b) {
	  			return b.counter - a.counter
			});

			$('body').html(`<h1>You're in ${winningWand[0].wand.toUpperCase()}!</h1>`);
			console.log(winningWand[0]);

			resetCounters();
			console.log(questionCounter);
			console.log(redCounter, blueCounter, greenCounter, yellowCounter);
		}
	});

	$('.pet-next').on('click', function(){
		if (questionCounter !== petQuestions.length) {
			quizGenerator(petQuestions);
		}
		else{
			var winningPet = [
				{
					pet: 'Blast-Ended Skrewt',
					counter: redCounter
				},
				{
					pet: 'Hippogriff',
					counter: blueCounter
				},
				{
					pet: 'Dragon',
					counter: greenCounter
				},
				{
					pet: 'Toad',
					counter: yellowCounter
				}
			];
			winningPet.sort(function(a,b) {
	  			return b.counter - a.counter
			});

			$('body').html(`<h1>You're in ${winningPet[0].pet.toUpperCase()}!</h1>`);
			console.log(winningPet[0]);

			resetCounters();
			console.log(questionCounter);
			console.log(redCounter, blueCounter, greenCounter, yellowCounter);
		}
	});

});





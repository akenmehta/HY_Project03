var houseQuestions = [
	{
		question: 'You enter an enchanted garden. What would you be most curious to examine first?',
		red: 'The statue of an old wizard with a strangely twinkling eye',
		green: 'The silver leafed tree bearing golden apples',
		blue: 'The bubbling pool, in the depths of which something luminous is swirling',
		yellow: 'The fat red toadstools that appear to be talking to each other'
	},
	{
		question: 'You and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before he will let all of you pass. Do you:',
		red: 'Volunteer to fight?',
		green: 'Let the others fight as you merrily cross the bridge.',
		blue: 'Attempt to confuse the troll into letting all three of you pass without fighting?',
		yellow: 'Suggest drawing lots to decide which of you will fight?'
	},
	{
		question: 'A Muggle confronts you and says that they are sure you are a witch or wizard. Do you:',
		red: 'Ask what makes them think so',
		green: 'Agree, and ask whether they’d like a free sample of a jinx',
		blue: 'Tell them that you are worried about their mental health, and offer to call a doctor',
		yellow: 'Agree, and walk away, leaving them to wonder whether you are bluffing'
	},
	{
		question: 'What would your family say is your worst trait?',
		red: 'Reckless – you don’t think before you act.',
		green: 'Worst trait? Really? You have no bad traits.',
		blue: 'A bit of a know-it-all.',
		yellow: 'You\'re too nice for your own good.'                                                                
	},
	{
		question: 'If you could have any superpower, which would you have?',
		red: 'Super strength or invincibility: all the better for adventuring!',
		green: 'Mind control: then everyone will do exactly what you say!',
		blue: 'The power of foresight: so you know what’s coming',
		yellow: 'Invisibility.'
	},
	{
		question: 'Which of these would be the best pet EVER?',
		red: 'A hippogriff: fierce, fast, and fearless!',
		green: 'A snake or a lizard.',
		blue: 'An owl or a phoenix: something clever.',
		yellow: 'A dog or a cat: something loyal and kind.'
	}
]
var wandQuestions = [
	{
		question: 'Which career would you pursue?',
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
	},
	{
		question: 'What are you allergic to?',
		red: 'Cuteness',
		green: 'Hair',
		blue: 'Roar',
		yellow: 'Slime'
	}
]
var quotes = [
	{
		quote: '" It does not do to dwell on dreams and forget to live "',
		author: '- Albus Dumbledore'
	},
	{
		quote: '" It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends "',
		author: '- Albus Dumbledore'
	},
	{
		quote: '" To the well-organized mind, death is but the next great adventure "',
		author: '- Albus Dumbledore'
	},
	{
		quote: '" It is our choices, Harry, that show what we truly are, far more than our abilities "',
		author: '- Albus Dumbledore'
	},
	{
		quote: '" Just because you have the emotional range of a teaspoon doesn’t mean we all have "',
		author: '- Hermione Granger'
	},
	{
		quote: '" Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real? "',
		author: '- Albus Dumbledore'
	},
	{
		quote: '" Words are in my not-so-humble opinion, the most inexhaustible form of magic we have, capable both of inflicting injury and remedying it "',
		author: '- Albus Dumbledore'
	},
	{
		quote: '" We do not need magic to transform our world. We carry all of the power we need inside ourselves already "',
		author: '- J.K. Rowling'
	},
	{
		quote: '" Whether you come back by page or by the big screen, Hogwarts will always be there to welcome you home "',
		author: '- J.K. Rowling'
	},
	{
		quote: '" You sort of start thinking anything\'s possible if you\'ve got enough nerve "',
		author: '- J.K. Rowling'
	},
	{
		quote: '" Crikey, I\'d love a dragon for a pet "',
		author: '- Rubeus Hagrid'
	}
];


var questionCounter = 0;
var redCounter = 0;
var greenCounter = 0;
var blueCounter = 0;
var yellowCounter = 0; 
var answerType = ['red', 'blue', 'green', 'yellow'];


// returns random quotes object from the quotes array
function randomQuotesIndex(){
	var randomNum = Math.floor(Math.random() * quotes.length);
	var randomQuote = quotes[randomNum];
	return randomQuote;
}

//Generates random quotes on the index page after 7 seconds
function quotesGenerator(){
	var randomHomeQuote = randomQuotesIndex();
	$('.magicWriting h2').text( randomHomeQuote.quote);
	$('.magicWriting span').text( randomHomeQuote.author);
}

//Populates questions and answer from the selected 'questions' arrays
function quizGenerator(quizName){
	quizCounters();
	//randomizing the order of the answers
	var randomAnswers = randomizeAnswers(answerType);

	$('.questions h2').text(quizName[questionCounter].question);
	$('label[for = "answer1"]').text(quizName[questionCounter][randomAnswers[0] ] );
	$('label[for = "answer2"]').text(quizName[questionCounter][randomAnswers[1] ] );
	$('label[for = "answer3"]').text(quizName[questionCounter][randomAnswers[2] ] );
	$('label[for = "answer4"]').text(quizName[questionCounter][randomAnswers[3] ] );
	
	//resetting the answer arrays for the next question
	randomAnswers = [];
	answerType = ['red', 'blue', 'green', 'yellow'];
	questionCounter++; 
}
//Keeps track of the user answers
function quizCounters(){
	var userAnswer = $('input:checked').val();
	if(userAnswer === 'red')
		redCounter++;
	else if(userAnswer === 'blue')
		blueCounter++;
	else if(userAnswer === 'green')
		greenCounter++;
	else if(userAnswer === 'yellow')
		yellowCounter++;
}

function resetCounters(){
	questionCounter = 0;
	redCounter = 0;
	greenCounter = 0;
	blueCounter = 0;
	yellowCounter = 0;
}

//In case of a tie, randomizes the winners from the list of potential winners
function randomizeWinner (quizName) {
	var winnerList = [];
	for (var key in quizName) {
		if (quizName[key].counter === quizName[0].counter) {
			winnerList.push(quizName[key]);
		}
	}
	var finalWinner = winnerList[Math.floor(Math.random() * winnerList.length)];
	console.log(finalWinner);
	return finalWinner;
}

//randomizing the order of the answers
function randomizeAnswers(array) {
	var randomizedArray = [];
	
	for (var i = array.length; i > 0; i = i -1) {
		var randomIndex = Math.floor(Math.random() * array.length)
		randomizedArray.push(array[randomIndex]);
		array.splice(randomIndex, 1);
	}
	
	return randomizedArray;
}

$(document).ready(function(){

	quotesGenerator();
	setInterval( quotesGenerator, 7000);

	$('.house-next').on('click', function(){
		if (questionCounter !== houseQuestions.length && $('input:checked').val() !== undefined ) {
			quizGenerator(houseQuestions);
		} 
		else if($('input:checked').val() !== undefined ){
			quizCounters();

			var winningHouse = [
				{
					house: 'gryffindor',
					image: './assets/gryffindor.png',
					counter: redCounter
				},
				{
					house: 'ravenclaw',
					image: './assets/ravenclaw.png',
					counter: blueCounter
				},
				{
					house: 'slytherin',
					image: './assets/slytherin.png',
					counter: greenCounter
				},
				{
					house: 'hufflepuff',
					image: './assets/hufflepuff.png',
					counter: yellowCounter
				}
			];

			winningHouse.sort(function(a,b) {
	  			return b.counter - a.counter
			});

			var finalWinner = randomizeWinner(winningHouse);

			$('div.questions').removeClass('questions-background');
			$('.questions').html(`<div class="answer-image-container"><img src="${finalWinner.image}"></div>`);
			$('.questions').append(`<h3>Congratulations! You're in </h3>
				<h3 class="houseWinner">${finalWinner.house}!</h3>`);
			$('.questions').append(`<div class="answerButtons">`);
			$('.answerButtons').append(`<a href='index.html'><button class="answerPageButton next-button">Home</button></a>`);
			$('.answerButtons').append(`<a href="https://twitter.com/share" class="twitter-share-button" data-size="small" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>`);
			$('.house-next').css('display', 'none');

			resetCounters();
			console.log(questionCounter);
			console.log(redCounter, blueCounter, greenCounter, yellowCounter);
			
			
		}		
	});

	$('.wand-next').on('click', function(){
		if (questionCounter !== wandQuestions.length && $('input:checked').val() !== undefined ) {
			quizGenerator(wandQuestions);
		}
		else if($('input:checked').val() !== undefined ){
			quizCounters();
			var winningWand = [
				{
					wand: 'Holly and Phoenix feather',
					image: './assets/wand.png',
					counter: redCounter
				},
				{
					wand: 'Hornbeam and Dragon heartstring',
					image: './assets/wand.png',
					counter: blueCounter
				},
				{
					wand: 'Elder and Basilisk fang',
					image: './assets/wand.png',
					counter: greenCounter
				},
				{
					wand: 'Maple and Troll whisker',
					image: './assets/wand.png',
					counter: yellowCounter
				}
			];
			winningWand.sort(function(a,b) {
	  			return b.counter - a.counter
			});

			var finalWinner = randomizeWinner(winningWand);

			$('div.questions').removeClass('questions-background');
			$('.questions').html(`<div class="answer-image-container"><img src="${finalWinner.image}"></div>`);
			$('.questions').append(`<h3>Congratulations! <br> This wand has chosen you: </h3> 
				<h3 class="wandWinner">${finalWinner.wand}!</h3>`);
			$('.questions').append(`<div class="answerButtons">`);
			$('.answerButtons').append(`<a href='index.html'><button class="answerPageButton next-button">Home</button></a>`);
			$('.answerButtons').append(`<a href="https://twitter.com/share" class="twitter-share-button" data-size="small" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>`);
			$('.wand-next').css('display', 'none');
			resetCounters();
			console.log(questionCounter);
			console.log(redCounter, blueCounter, greenCounter, yellowCounter);
		}
	});

	$('.pet-next').on('click', function(){
		if (questionCounter !== petQuestions.length && $('input:checked').val() !== undefined ) {
			quizGenerator(petQuestions);
		}
		else if($('input:checked').val() !== undefined ){
			quizCounters();
			var winningPet = [
				{
					pet: 'Blast-Ended Skrewt',
					image: './assets/Skrewt.png',
					counter: redCounter
				},
				{
					pet: 'Hippogriff',
					image: './assets/Hippogrif.png',
					counter: blueCounter
				},
				{
					pet: 'Dragon',
					image: './assets/dragon.jpg',
					counter: greenCounter
				},
				{
					pet: 'Toad',
					image: './assets/Toad.jpg',
					counter: yellowCounter
				}
			];
			winningPet.sort(function(a,b) {
	  			return b.counter - a.counter
			});

			var finalWinner = randomizeWinner(winningPet);

			$('div.questions').removeClass('questions-background');
			$('.questions').html(`<div class="answer-image-container"><img src="${finalWinner.image}"></div>`);
			$('.questions').append(`<h3>Congratulations! You have chosen: </h3>
			 <h3 class="petWinner">${finalWinner.pet}</h3>
			 <h3> as your life long partner!</h3>`);
			$('.questions').append(`<div class="answerButtons">`);
			$('.answerButtons').append(`<a href='index.html'><button class="answerPageButton next-button">Home</button></a>`);
			$('.answerButtons').append(`<a href="https://twitter.com/share" class="twitter-share-button" data-size="small" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>`);
			$('.pet-next').css('display', 'none');
			$('footer').css({
				position: 'abosolute',
				top: 0,
				left: 0,
				right: 0
			});


			resetCounters();
			console.log(questionCounter);
			console.log(redCounter, blueCounter, greenCounter, yellowCounter);
		}
	});

});





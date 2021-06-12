//Creating quiz questions
alert("Welcome to the Culinary Quiz! <br> Let's test your kitchen knowledge!")

var questions  = [
    {q: 'There are 3 teaspoons in a tablesoon.' , a: 't'},
    {q: 'There are 3 half cups in a cup.' , a: 'f'},
    {q: 'A pint is 16 fluid ounces.' , a: 't'},
    {q: 'You can thicken a sauce by using a roux.' , a: 't'},
    {q: 'Steak is only safe to eat when cooked well-done.' , a: 'f'},
    {q: 'Poke (pronounced Po-kay) is a dish native to Hawaii' , a: 't'},
    {q: 'When making an aioli, it is important to try to break the emulsion.' , a: 'f'},
    {q: 'Proofing baked goods like breads requires alcohol' , a: 'f'},
    {q: 'A julienne is when food is cut into cubes.' , a: 'f'},
    {q: 'Umami describes the sensation of tasing glutamates, like MSG.' , a: 't'}
];

//score starts at 0 and increments as answers are counted as correct
var score = 0;

//iteration through equestions, incrementing correct answers
for (var i = 0; i < questions.length; i++) {
    var answer =confirm(questions[i].q);

    if ((questions[i].a === 't' && answer === true) ||
    (questions[i].a === 'f') && answer === false) {
        score++
        alert("You got it!")
    } else {
        alert("Womp Womp. Wrong!")
    }
};

//final score, should give one of two different messages depending on score range
alert("Your final score is " + score + "/10.")

if (score <= 7) {
    alert("Next time get your head in the game!")
} else {
    alert("You scored high, but don't get cocky!")
}

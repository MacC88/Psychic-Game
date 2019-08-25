var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var letter = alphabet [Math.floor(Math.random() * alphabet.length)];

var win = 0;
var lose = 0;
var guess = 10;
var missedArr = [];



console.log(letter);


document.onkeyup = function(input){
var userGuess = input.key;

        
//correct answer
    if (userGuess === letter){
        win++;
        guess = 10;
        missedArr = [];
    }

//incorrect answer
    if (userGuess !== letter){
        guess--;
    }
    if (guess == 0){
        lose++;
        guess = 10;
        missedArr = [];
    }

//missedArr
    else {
        missedArr.push(userGuess);
        document.getElementById('missed').innerHTML = 'Missed so far: ' + missedArr;
    }



document.getElementById('wins').innerText = 'Wins: ' + win;
document.getElementById('losses').innerHTML = 'Losses: ' + lose;
document.getElementById('guesses').innerHTML = 'Guesses left: ' + guess;


}
console.log('end')
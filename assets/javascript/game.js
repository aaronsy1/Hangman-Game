var wins = 0;
var loss = 0;

// 32 characters in array
var char = [
    'ren', 'futaba', 'ryuji', 'yusuke', 'makoto', 'haru', 'akechi', 'morgana','ann'
];

var guessedLetters = [];
var attemptsRemaining = 9;
var points = 0;
var win = true;
var blank = [];
var endGame = false;
var found = false;

//determine character from array
var randomChar = char[Math.floor(Math.random() * char.length)];

//testing randomChar
console.log(randomChar);

//create an array of underscores and spaces to "hide the random character"
for (i = 0; i < randomChar.length; i++) {

    if (randomChar[i] === " ") {
        blank.push(" ");
    }
    else {
        blank.push("_");
    }

}


//function to change array of underscores and spaces into string
var arrToStr = function (arr) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    return str;
}

//creating variable to easily store new string of underscores
empty = arrToStr(blank);

//initial press that replaces text
document.onkeyup = function (event) {
    //replaces "press any key to start with empty"
    document.getElementById("start-game").textContent = empty;

    //key press that determines user guess and starts game
    document.onkeyup = function (event) {
        var userGuess = event.key;
        
        if (guessedLetters.length === 0) {
            guessedLetters.push(userGuess);
            
        }
        else {
            
            found = false;
            for (var k = 0; k < guessedLetters.length; k++) {
                
                if (userGuess === guessedLetters[k]) {
                    found = true;
                    

                }
                
            }

            if(!found){
                guessedLetters.push(userGuess);
            }
        }

       


        console.log(guessedLetters);

        //display guessAttempted to guessed letters
        document.getElementById("guessed-letters").textContent = guessedLetters;

        //loop that iterates through random char to replace underscore with letter
        for (var j = 0; j < randomChar.length; j++) {


            if (userGuess === randomChar[j]) {

                //replacing blank ARRAY with userGuess
                blank[j] = userGuess;
                //turning blank array into string
                empty = arrToStr(blank);
                //displaying updated letters to screen
                document.getElementById("start-game").textContent = empty;
                
                //check to make sure points increment only when userGuess is inputted the FIRST time
                if(!found){
                    points++;
                }
                console.log(points);



            }
            




        }

        if(points === randomChar.length)
        {
            endGame = true;
        }

        if (endGame === true){
            console.log("GAME ENDED");
        }
    }

}





















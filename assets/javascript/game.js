var wins = 0;
var loss = 0;

// 32 characters in array
var char = [
    'ren', 'futaba', 'ryuji', 'yusuke', 'makoto', 'haru', 'akechi', 'morgana', 'ann'
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

            if (!found) {
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
                if (!found) {
                    points++;
                }
                console.log("points: " + points);
            }
            
        }

        //iterates attempts left by 1 down if user guesses new letter
        if(!found){
            attemptsRemaining--;
            console.log("attempts remaining: " + attemptsRemaining);
            document.getElementById("guesses-left").textContent=attemptsRemaining;
        }

        //notify player if lost
        if (attemptsRemaining === 0) {
            alert("You Lost");
        }

        //check to see when game is done
        if (points === randomChar.length) {
            endGame = true;
        }

        //notify player if won
        if (endGame === true) {
            console.log("GAME ENDED");
            alert("You Win");
        }

        //setting pictures to appear of corresponding characters when game is done
        if (endGame === true && randomChar === 'makoto') {

            var makoto = document.createElement('img');
            makoto.src = "./assets/images/makoto.jpg";
            document.getElementById("anime-picture").appendChild(makoto);
            makoto.style.height ='200px';
            makoto.style.width ='350px';

        }
        if (endGame === true && randomChar === 'akechi') {

            var akechi = document.createElement('img');
            akechi.src = "./assets/images/akechi.jpg";
            document.getElementById("anime-picture").appendChild(akechi);
            akechi.style.height ='200px';
            akechi.style.width ='350px';
        }
        if (endGame === true && randomChar === 'ann') {

            var ann = document.createElement('img');
            ann.src = "./assets/images/ann.jpg";
            document.getElementById("anime-picture").appendChild(ann);
            ann.style.height ='200px';
            ann.style.width ='350px';

        }
        if (endGame === true && randomChar === 'futaba') {

            var futaba = document.createElement('img');
            futaba.src = "./assets/images/futaba.jpg";
            document.getElementById("anime-picture").appendChild(futaba);
            futaba.style.height ='200px';
            futaba.style.width ='350px';

        }
        if (endGame === true && randomChar === 'haru') {

            var haru = document.createElement('img');
            haru.src = "./assets/images/haru.jpg";
            document.getElementById("anime-picture").appendChild(haru);
            haru.style.height ='200px';
            haru.style.width ='350px';
        }
        if (endGame === true && randomChar === 'morgana') {

            var morgana = document.createElement('img');
            morgana.src = "./assets/images/morgana.jpg";
            document.getElementById("anime-picture").appendChild(morgana);
            morgana.style.height ='200px';
            morgana.style.width ='350px';
        }
        if (endGame === true && randomChar === 'ren') {

            var ren = document.createElement('img');
            ren.src = "./assets/images/ren.jpg";
            document.getElementById("anime-picture").appendChild(ren);
            ren.style.height ='200px';
            ren.style.width ='350px';

        }
        if (endGame === true && randomChar === 'ryuji') {

            var ryuji = document.createElement('img');
            ryuji.src = "./assets/images/ryuji.jpg";
            document.getElementById("anime-picture").appendChild(ryuji);
            ryuji.style.height ='200px';
            ryuji.style.width ='350px';

        }
        if (endGame === true && randomChar === 'yusuke') {

            var yusuke = document.createElement('img');
            yusuke.src = "./assets/images/yusuke.jpg";
            document.getElementById("anime-picture").appendChild(yusuke);
            yusuke.style.height ='200px';
            yusuke.style.width ='350px';
            

        }



        
    }

}





















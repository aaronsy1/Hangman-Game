var wins = 0;
var loss = 0;

// 32 animes in array
var anime = [
    'naruto', 'one piece', 'bleach', 'hunter x hunter', 'kill la kill', 'akira', 'made in abyss',
    'toradora', 'clannad', 'blue excorcist', 'steins gate', 'full metal alchemist', 'my hero academia',
    'one punch man', 'tokyo ghoul', 'haikyu', 'baccano', 'erased', 'code geass', 'cowboy bebop',
    'death note', 'death parade', 'digimon', 'dragon ball', 'durarara', 'neon genesis evangelion',
    'fairy tail', 'fate stay night', 'flcl', 'gabriel dropout', 'little witch academia', 'magi',
];

var guessedLetters = [];
var attemptsRemaining = 9;
var points = 0;
var win = true;
var blank =[];

//determine anime from array
var randomAnime = anime[Math.floor(Math.random() * anime.length)];

//testing randomAnime
console.log(randomAnime);

//create an array of underscores and spaces to "hide the random anime"
for (i = 0; i < randomAnime.length; i++) 
{
    
    if (randomAnime[i] === " ") {
        blank.push(" ");
    } 
    else {
        blank.push("_");
    }
    
}


//function to change array of underscores and spaces into string
var arrToStr = function(arr) {
    var str = "";
    for(var i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    return str;
}

//creating variable to easily store new string of underscores
empty = arrToStr(blank);

//initial press that replaces text
document.onkeyup = function (event) 
{
    //replaces "press any key to start with empty"
    document.getElementById("start-game").textContent = empty;

    //key press that determines user guess and starts for loop
    document.onkeyup = function (event) 
        {
            var userGuess = event.key;
            console.log(userGuess);

    //loop that iterates through random anime to replace underscore with letter
    for (var j =0; j<randomAnime.length; j++) 
    {
        
            
            if (userGuess === randomAnime[j]) 
            {
            
            //replacing blank ARRAY with userGuess
            blank[j]=userGuess;
            //turning blank array into string
            empty = arrToStr(blank);
            //displaying updated letters to screen
            document.getElementById("start-game").textContent = empty;

            points++;
            console.log(points);


            
            }
            else
            {

            }

        
        }
    }

}



   

    


        

    
    









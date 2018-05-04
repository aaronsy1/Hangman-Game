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

var guessedLetters =[];
var attemptsRemaining = 9;
var points = 0;
var win = true;

var randomAnime = anime[Math.floor(Math.random() *anime.length)];

//testing randomAnime
console.log(randomAnime);




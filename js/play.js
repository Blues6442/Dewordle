var audio = new Audio('https://archive.org/download/twitter-1355278061181280262/1355278061181280262.mp4');
document.getElementById("music").onclick = function(){

    document.getElementById("music").style.display = 'none';
   document.getElementById("musicOff").style.display = 'initial';

audio.play();
   
   audio.addEventListener('ended', function() {
   this.currentTime = 0;
   this.play();

}, false);
}

document.getElementById("musicOff").onclick = function(){
  document.getElementById("music").style.display = 'initial';
  document.getElementById("musicOff").style.display = 'none';

  audio.pause();
}

document.getElementById("musicOff").style.display = 'none';

//alert("Welcome to Dewott! Press OK to start the game")
var score = 0;
var txt;

let Dex = [{
   name: "Victini",
   type1: "Psychic",
   type2: "Fire",
   Evolution: 1,
   hp: 100,
   atk: 100,
   def: 100,
   spa: 100,
   spdef: 100,
   spe: 100
 },
 {
   name: "Snivy",
   type1: "Grass",
   type2: "None",
   Evolution: 3,
   hp: 45,
   atk: 45,
   def: 55,
   spa: 45,
   spdef: 55,
   spe: 63
 },
 {
   name: "Servine",
   type1: "Grass",
   type2: "None",
   Evolution: 3,
   hp: 60,
   atk: 60,
   def: 75,
   spa: 60,
   spdef: 75,
   spe: 83
 },
 {
   name: "Serperior",
   type1: "Grass",
   type2: "None",
   Evolution: 3,
   hp: 75,
   atk: 75,
   def: 93,
   spa: 75,
   spdef: 95,
   spe: 113
 },
 {
   name: "Tepig",
   type1: "Fire",
   type2: "None",
   Evolution: 3,
   hp: 65,
   atk: 63,
   def: 45,
   spa: 45,
   spdef: 45,
   spe: 45
 },
 {
   name: "Pignite",
   type1: "Fire",
   type2: "Fighting",
   Evolution: 3,
   hp: 90,
   atk: 93,
   def: 55,
   spa: 70,
   spdef: 55,
   spe: 44
 },
 {
   name: "Emboar",
   type1: "Fire",
   type2: "Fighting",
   Evolution: 3,
   hp: 110,
   atk: 123,
   def: 65,
   spa: 100,
   spdef: 65,
   spe: 65
 },
 {
   name: "Oshawott",
   type1: "Water",
   type2: "None",
   Evolution: 3,
   hp: 55,
   atk: 55,
   def: 45,
   spa: 63,
   spdef: 45,
   spe: 45
 },
 {
   name: "Dewott",
   type1: "water",
   type2: "None",
   Evolution: 3,
   hp: 75,
   atk: 75,
   def: 60,
   spa: 83,
   spdef: 60,
   spe: 60
 },
 {
   name: "Samurott",
   type1: "Water",
   type2: "None",
   Evolution: 3,
   hp: 95,
   atk: 100,
   def: 85,
   spa: 108,
   spdef: 70,
   spe: 70
 },
 {
   name: "Patrat",
   type1: "Normal",
   type2: "None",
   Evolution: 2,
   hp: 45,
   atk: 55,
   def: 39,
   spa: 35,
   spdef: 39,
   spe: 42
 },
 {
   name: "Watchog",
   type1: "Normal",
   type2: "None",
   Evolution: 2,
   hp: 60,
   atk: 85,
   def: 69,
   spa: 60,
   spdef: 69,
   spe: 77
 },
 {
   name: "Lillipup",
   type1: "Normal",
   type2: "None",
   Evolution: 3,
   hp: 45,
   atk: 60,
   def: 45,
   spa: 25,
   spdef: 45,
   spe: 55
 },
 {
   name: "Herdier",
   type1: "Normal",
   type2: "None",
   Evolution: 3,
   hp: 65,
   atk: 80,
   def: 65,
   spa: 35,
   spdef: 65,
   spe: 60
 },
 {
   name: "Stoutland",
   type1: "normal",
   type2: "None",
   Evolution: 3,
   hp: 85,
   atk: 110,
   def: 90,
   spa: 45,
   spdef: 90,
   spe: 80
 },
 {
   name: "Purrloin",
   type1: "Dark",
   type2: "None",
   Evolution: 2,
   hp: 41,
   atk: 50,
   def: 37,
   spa: 50,
   spdef: 37,
   spe: 66
 },
 {
   name: "Liepard",
   type1: "Dark",
   type2: "None",
   Evolution: 2,
   hp: 64,
   atk: 88,
   def: 50,
   spa: 88,
   spdef: 50,
   spe: 106
 },
 {
   name: "Pansage",
   type1: "Grass",
   type2: "None",
   Evolution: 2,
   hp: 50,
   atk: 53,
   def: 48,
   spa: 53,
   spdef: 48,
   spe: 64
 },
 {
   name: "Simisage",
   type1: "Grass",
   type2: "None",
   Evolution: 2,
   hp: 75,
   atk: 98,
   def: 63,
   spa: 98,
   spdef: 63,
   spe: 101
 },
 {
   name: "Pansear",
   type1: "Fire",
   type2: "None",
   Evolution: 2,
   hp: 50,
   atk: 53,
   def: 48,
   spa: 53,
   spdef: 48,
   spe: 64
 },
 {
   name: "Simisear",
   type1: "Fire",
   type2: "None",
   Evolution: 2,
   hp: 75,
   atk: 98,
   def: 63,
   spa: 98,
   spdef: 63,
   spe: 101
 },
 {
   name: "Panpour",
   type1: "Water",
   type2: "None",
   Evolution: 2,
   hp: 50,
   atk: 53,
   def: 48,
   spa: 53,
   spdef: 48,
   spe: 64
 },
 {
   name: "Simipour",
   type1: "Water",
   type2: "None",
   Evolution: 2,
   hp: 75,
   atk: 98,
   def: 63,
   spa: 98,
   spdef: 63,
   spe: 101
 },
 {
   name: "Munna",
   type1: "Psychic",
   type2: "None",
   Evolution: 2,
   hp: 76,
   atk: 25,
   def: 45,
   spa: 67,
   spdef: 55,
   spe: 24
 },
 {
   name: "Musharna",
   type1: "Psychic",
   type2: "None",
   Evolution: 2,
   hp: 116,
   atk: 55,
   def: 85,
   spa: 107,
   spdef: 95,
   spe: 29
 },
 {
   name: "Pidove",
   type1: "Normal",
   type2: "Flying",
   Evolution: 3,
   hp: 50,
   atk: 55,
   def: 50,
   spa: 36,
   spdef: 30,
   spe: 43
 },
 {
   name: "Tranquill",
   type1: "Normal",
   type2: "Flying",
   Evolution: 3,
   hp: 62,
   atk: 77,
   def: 62,
   spa: 50,
   spdef: 42,
   spe: 65
 },
 {
   name: "Unfezant",
   type1: "Normal",
   type2: "Flying",
   Evolution: 3,
   hp: 80,
   atk: 115,
   def: 80,
   spa: 65,
   spdef: 55,
   spe: 93
 },
 {
   name: "Blitzle",
   type1: "Electric",
   type2: "None",
   Evolution: 2,
   hp: 45,
   atk: 60,
   def: 32,
   spa: 50,
   spdef: 32,
   spe: 76
 },
 {
   name: "Zebstrika",
   type1: "Electric",
   type2: "None",
   Evolution: 2,
   hp: 75,
   atk: 100,
   def: 63,
   spa: 80,
   spdef: 63,
   spe: 116
 },
 {
   name: "Roggenrola",
   type1: "Rock",
   type2: "None",
   Evolution: 3,
   hp: 55,
   atk: 75,
   def: 85,
   spa: 25,
   spdef: 25,
   spe: 15
 },
 {
   name: "Boldore",
   type1: "Rock",
   type2: "None",
   Evolution: 3,
   hp: 70,
   atk: 105,
   def: 105,
   spa: 50,
   spdef: 40,
   spe: 20
 },
 {
   name: "Gigalith",
   type1: "Rock",
   type2: "None",
   Evolution: 3,
   hp: 85,
   atk: 135,
   def: 130,
   spa: 60,
   spdef: 80,
   spe: 25
 },
 {
   name: "Woobat",
   type1: "Psychic",
   type2: "Flying",
   Evolution: 2,
   hp: 65,
   atk: 45,
   def: 43,
   spa: 55,
   spdef: 43,
   spe: 72
 },
 {
   name: "Swoobat",
   type1: "Psychic",
   type2: "Flying",
   Evolution: 2,
   hp: 67,
   atk: 57,
   def: 55,
   spa: 77,
   spdef: 55,
   spe: 114
 },
 {
   name: "Drilbur",
   type1: "Ground",
   type2: "None",
   Evolution: 2,
   hp: 60,
   atk: 85,
   def: 40,
   spa: 30,
   spdef: 45,
   spe: 68
 },
 {
   name: "Excadrill",
   type1: "Ground",
   type2: "Steel",
   Evolution: 2,
   hp: 110,
   atk: 135,
   def: 60,
   spa: 50,
   spdef: 65,
   spe: 88
 },
 {
   name: "Audino",
   type1: "Normal",
   type2: "None",
   Evolution: 1,
   hp: 103,
   atk: 60,
   def: 86,
   spa: 60,
   spdef: 86,
   spe: 50
 },
 {
   name: "Timburr",
   type1: "Fighting",
   type2: "None",
   Evolution: 3,
   hp: 75,
   atk: 80,
   def: 55,
   spa: 25,
   spdef: 35,
   spe: 35
 },
 {
   name: "Gurdurr",
   type1: "Fighting",
   type2: "None",
   Evolution: 3,
   hp: 85,
   atk: 105,
   def: 85,
   spa: 40,
   spdef: 50,
   spe: 40
 },
 {
   name: "Conkeldurr",
   type1: "Fighting",
   type2: "None",
   Evolution: 3,
   hp: 105,
   atk: 140,
   def: 95,
   spa: 55,
   spdef: 65,
   spe: 45
 },
 {
   name: "Tympole",
   type1: "Water",
   type2: "None",
   Evolution: 3,
   hp: 50,
   atk: 50,
   def: 40,
   spa: 50,
   spdef: 40,
   spe: 64
 },
 {
   name: "Palpitoad",
   type1: "Water",
   type2: "Ground",
   Evolution: 3,
   hp: 75,
   atk: 65,
   def: 55,
   spa: 65,
   spdef: 55,
   spe: 69
 },
 {
   name: "Seismitoad",
   type1: "Water",
   type2: "Ground",
   Evolution: 3,
   hp: 105,
   atk: 95,
   def: 75,
   spa: 85,
   spdef: 75,
   spe: 74
 },
 {
   name: "Throh",
   type1: "Fighting",
   type2: "None",
   Evolution: 1,
   hp: 120,
   atk: 100,
   def: 85,
   spa: 30,
   spdef: 75,
   spe: 85
 },
 {
   name: "Sawk",
   type1: "Fighting",
   type2: "None",
   Evolution: 1,
   hp: 75,
   atk: 125,
   def: 75,
   spa: 30,
   spdef: 75,
   spe: 85
 },
 {
   name: "Sewaddle",
   type1: "Bug",
   type2: "Grass",
   Evolution: 3,
   hp: 45,
   atk: 53,
   def: 70,
   spa: 40,
   spdef: 60,
   spe: 42
 },
 {
   name: "Swadloon",
   type1: "Bug",
   type2: "Grass",
   Evolution: 3,
   hp: 55,
   atk: 63,
   def: 90,
   spa: 50,
   spdef: 80,
   spe: 42
 },
 {
   name: "Leavanny",
   type1: "Bug",
   type2: "Grass",
   Evolution: 3,
   hp: 75,
   atk: 103,
   def: 80,
   spa: 70,
   spdef: 80,
   spe: 92
 },
 {
   name: "Venipede",
   type1: "Bug",
   type2: "Poison",
   Evolution: 3,
   hp: 30,
   atk: 45,
   def: 59,
   spa: 30,
   spdef: 39,
   spe: 57
 },
 {
   name: "Whirlipede",
   type1: "Bug",
   type2: "Poison",
   Evolution: 3,
   hp: 40,
   atk: 55,
   def: 99,
   spa: 40,
   spdef: 79,
   spe: 47
 },
 {
   name: "Scolipede",
   type1: "Bug",
   type2: "Poison",
   Evolution: 3,
   hp: 60,
   atk: 100,
   def: 89,
   spa: 55,
   spdef: 69,
   spe: 112
 },
 {
   name: "Cottonee",
   type1: "Grass",
   type2: "Fairy",
   Evolution: 2,
   hp: 40,
   atk: 27,
   def: 60,
   spa: 37,
   spdef: 50,
   spe: 66
 },
 {
   name: "Whimsicott",
   type1: "Grass",
   type2: "Fairy",
   Evolution: 2,
   hp: 60,
   atk: 67,
   def: 85,
   spa: 77,
   spdef: 75,
   spe: 116
 },
 {
   name: "Petilil",
   type1: "Grass",
   type2: "None",
   Evolution: 2,
   hp: 45,
   atk: 35,
   def: 50,
   spa: 70,
   spdef: 50,
   spe: 30
 },
 {
   name: "Lilligant",
   type1: "Grass",
   type2: "None",
   Evolution: 2,
   hp: 70,
   atk: 60,
   def: 75,
   spa: 110,
   spdef: 75,
   spe: 90
 },
 {
   name: "Basculin",
   type1: "Water",
   type2: "None",
   Evolution: 1,
   hp: 70,
   atk: 92,
   def: 65,
   spa: 80,
   spdef: 55,
   spe: 98
 },
 {
   name: "Sandile",
   type1: "Ground",
   type2: "Dark",
   Evolution: 3,
   hp: 50,
   atk: 72,
   def: 35,
   spa: 35,
   spdef: 35,
   spe: 65
 },
 {
   name: "Krokorok",
   type1: "Ground",
   type2: "Dark",
   Evolution: 3,
   hp: 60,
   atk: 82,
   def: 45,
   spa: 45,
   spdef: 45,
   spe: 74
 },
 {
   name: "Krookodile",
   type1: "Ground",
   type2: "Dark",
   Evolution: 3,
   hp: 95,
   atk: 117,
   def: 80,
   spa: 65,
   spdef: 70,
   spe: 92
 },
 {
   name: "Darumaka",
   type1: "Fire",
   type2: "None",
   Evolution: 2,
   hp: 70,
   atk: 90,
   def: 45,
   spa: 15,
   spdef: 45,
   spe: 50
 },
 {
   name: "Darmanitan",
   type1: "Fire",
   type2: "None",
   Evolution: 2,
   hp: 105,
   atk: 140,
   def: 55,
   spa: 30,
   spdef: 55,
   spe: 95
 },
 {
   name: "Darmanitan Zen",
   type1: "Fire",
   type2: "Psychic",
   Evolution: 2,
   hp: 105,
   atk: 30,
   def: 105,
   spa: 140,
   spdef: 105,
   spe: 55
 },
 {
   name: "Maractus",
   type1: "Grass",
   type2: "None",
   Evolution: 1,
   hp: 75,
   atk: 86,
   def: 67,
   spa: 106,
   spdef: 67,
   spe: 60
 },
 {
   name: "Dwebble",
   type1: "Bug",
   type2: "Rock",
   Evolution: 2,
   hp: 50,
   atk: 65,
   def: 85,
   spa: 35,
   spdef: 35,
   spe: 55
 },
 {
   name: "Crustle",
   type1: "Bug",
   type2: "Rock",
   Evolution: 2,
   hp: 70,
   atk: 105,
   def: 125,
   spa: 65,
   spdef: 75,
   spe: 45
 },
 {
   name: "Scraggy",
   type1: "Dark",
   type2: "Fighting",
   Evolution: 2,
   hp: 50,
   atk: 75,
   def: 70,
   spa: 35,
   spdef: 70,
   spe: 48
 },
 {
   name: "Scrafty",
   type1: "Dark",
   type2: "Fighting",
   Evolution: 2,
   hp: 65,
   atk: 90,
   def: 115,
   spa: 45,
   spdef: 115,
   spe: 58
 },
 {
   name: "Sigilyph",
   type1: "Psychic",
   type2: "Flying",
   Evolution: 1,
   hp: 72,
   atk: 58,
   def: 80,
   spa: 103,
   spdef: 80,
   spe: 97
 },
 {
   name: "Yamask",
   type1: "Ghost",
   type2: "None",
   Evolution: 2,
   hp: 38,
   atk: 30,
   def: 85,
   spa: 55,
   spdef: 65,
   spe: 30
 },
 {
   name: "Cofagrigus",
   type1: "Ghost",
   type2: "None",
   Evolution: 2,
   hp: 58,
   atk: 50,
   def: 145,
   spa: 95,
   spdef: 105,
   spe: 30
 },
 {
   name: "Tirtouga",
   type1: "Water",
   type2: "Rock",
   Evolution: 2,
   hp: 54,
   atk: 78,
   def: 103,
   spa: 53,
   spdef: 45,
   spe: 22
 },
 {
   name: "Carrascosta",
   type1: "Water",
   type2: "Rock",
   Evolution: 2,
   hp: 74,
   atk: 108,
   def: 133,
   spa: 83,
   spdef: 65,
   spe: 32
 },
 {
   name: "Archen",
   type1: "Rock",
   type2: "Flying",
   Evolution: 2,
   hp: 55,
   atk: 112,
   def: 45,
   spa: 74,
   spdef: 45,
   spe: 70
 },
 {
   name: "Archeops",
   type1: "Rock",
   type2: "Flying",
   Evolution: 2,
   hp: 75,
   atk: 140,
   def: 65,
   spa: 112,
   spdef: 65,
   spe: 110
 },
 {
   name: "Trubbish",
   type1: "Poison",
   type2: "None",
   Evolution: 2,
   hp: 50,
   atk: 50,
   def: 62,
   spa: 40,
   spdef: 62,
   spe: 65
 },
 {
   name: "Garbodor",
   type1: "Poison",
   type2: "None",
   Evolution: 2,
   hp: 80,
   atk: 95,
   def: 82,
   spa: 60,
   spdef: 82,
   spe: 75
 },
 {
   name: "Zorua",
   type1: "Dark",
   type2: "None",
   Evolution: 2,
   hp: 40,
   atk: 65,
   def: 40,
   spa: 80,
   spdef: 40,
   spe: 65
 },
 {
   name: "Zoroark",
   type1: "Dark",
   type2: "None",
   Evolution: 2,
   hp: 60,
   atk: 105,
   def: 60,
   spa: 120,
   spdef: 60,
   spe: 105
 },
 {
   name: "Minccino",
   type1: "Normal",
   type2: "None",
   Evolution: 2,
   hp: 55,
   atk: 50,
   def: 40,
   spa: 40,
   spdef: 40,
   spe: 75
 },
 {
   name: "Cinccino",
   type1: "Normal",
   type2: "None",
   Evolution: 2,
   hp: 75,
   atk: 95,
   def: 60,
   spa: 65,
   spdef: 60,
   spe: 115
 },
 {
   name: "Gothita",
   type1: "Psychic",
   type2: "None",
   Evolution: 3,
   hp: 45,
   atk: 30,
   def: 50,
   spa: 55,
   spdef: 65,
   spe: 45
 },
 {
   name: "Gothorita",
   type1: "Psychic",
   type2: "None",
   Evolution: 3,
   hp: 60,
   atk: 45,
   def: 70,
   spa: 75,
   spdef: 85,
   spe: 55
 },
 {
   name: "Gothitelle",
   type1: "Psychic",
   type2: "None",
   Evolution: 3,
   hp: 70,
   atk: 55,
   def: 95,
   spa: 95,
   spdef: 110,
   spe: 65
 },
 {
   name: "Solosis",
   type1: "Psychic",
   type2: "None",
   Evolution: 3,
   hp: 45,
   atk: 30,
   def: 40,
   spa: 105,
   spdef: 50,
   spe: 20
 },
 {
   name: "Duosion",
   type1: "Psychic",
   type2: "None",
   Evolution: 3,
   hp: 65,
   atk: 40,
   def: 50,
   spa: 125,
   spdef: 85,
   spe: 30
 },
 {
   name: "Reuniclus",
   type1: "Psychic",
   type2: "None",
   Evolution: 3,
   hp: 110,
   atk: 65,
   def: 75,
   spa: 125,
   spdef: 85,
   spe: 30
 },
 {
   name: "Ducklett",
   type1: "Water",
   type2: "Flying",
   Evolution: 2,
   hp: 62,
   atk: 44,
   def: 50,
   spa: 44,
   spdef: 50,
   spe: 55
 },
 {
   name: "Swanna",
   type1: "Water",
   type2: "Flying",
   Evolution: 2,
   hp: 75,
   atk: 87,
   def: 63,
   spa: 87,
   spdef: 63,
   spe: 98
 },
 {
   name: "Vanillite",
   type1: "Ice",
   type2: "None",
   Evolution: 3,
   hp: 36,
   atk: 50,
   def: 50,
   spa: 65,
   spdef: 60,
   spe: 44
 },
 {
   name: "Vanillish",
   type1: "Ice",
   type2: "None",
   Evolution: 3,
   hp: 51,
   atk: 65,
   def: 65,
   spa: 80,
   spdef: 75,
   spe: 59
 },
 {
   name: "Vanilluxe",
   type1: "Ice",
   type2: "None",
   Evolution: 3,
   hp: 71,
   atk: 95,
   def: 85,
   spa: 110,
   spdef: 95,
   spe: 79
 },
 {
   name: "Deerling",
   type1: "Normal",
   type2: "Grass",
   Evolution: 2,
   hp: 60,
   atk: 60,
   def: 50,
   spa: 40,
   spdef: 50,
   spe: 75
 },
 {
   name: "Sawsbuck",
   type1: "Normal",
   type2: "Grass",
   Evolution: 2,
   hp: 80,
   atk: 100,
   def: 70,
   spa: 60,
   spdef: 70,
   spe: 95
 },
 {
   name: "Emolga",
   type1: "Electric",
   type2: "Flying",
   Evolution: 1,
   hp: 55,
   atk: 75,
   def: 60,
   spa: 75,
   spdef: 60,
   spe: 103
 },
 {
   name: "Karrablast",
   type1: "Bug",
   type2: "None",
   Evolution: 2,
   hp: 50,
   atk: 75,
   def: 45,
   spa: 40,
   spdef: 45,
   spe: 60
 },
 {
   name: "Escavalier",
   type1: "Bug",
   type2: "Steel",
   Evolution: 2,
   hp: 70,
   atk: 135,
   def: 105,
   spa: 60,
   spdef: 105,
   spe: 20
 },
 {
   name: "Foongus",
   type1: "Grass",
   type2: "Poison",
   Evolution: 2,
   hp: 69,
   atk: 55,
   def: 45,
   spa: 55,
   spdef: 55,
   spe: 15
 },
 {
   name: "Amoonguss",
   type1: "Grass",
   type2: "Poison",
   Evolution: 2,
   hp: 114,
   atk: 85,
   def: 70,
   spa: 85,
   spdef: 80,
   spe: 30
 },
 {
   name: "Frillish",
   type1: "Water",
   type2: "Ghost",
   Evolution: 2,
   hp: 55,
   atk: 40,
   def: 50,
   spa: 65,
   spdef: 85,
   spe: 40
 },
 {
   name: "Jellicent",
   type1: "Water",
   type2: "Ghost",
   Evolution: 2,
   hp: 100,
   atk: 60,
   def: 70,
   spa: 85,
   spdef: 105,
   spe: 60
 },
 {
   name: "Alomomola",
   type1: "Water",
   type2: "None",
   Evolution: 1,
   hp: 165,
   atk: 75,
   def: 80,
   spa: 40,
   spdef: 45,
   spe: 65
 },
 {
   name: "Joltik",
   type1: "Bug",
   type2: "Electric",
   Evolution: 2,
   hp: 50,
   atk: 47,
   def: 50,
   spa: 57,
   spdef: 50,
   spe: 65
 },
 {
   name: "Galvantula",
   type1: "Bug",
   type2: "Electric",
   Evolution: 2,
   hp: 70,
   atk: 77,
   def: 60,
   spa: 97,
   spdef: 60,
   spe: 108
 },
 {
   name: "Ferroseed",
   type1: "Grass",
   type2: "Steel",
   Evolution: 2,
   hp: 44,
   atk: 50,
   def: 91,
   spa: 24,
   spdef: 86,
   spe: 10
 },
 {
   name: "Ferrothorn",
   type1: "Grass",
   type2: "Steel",
   Evolution: 2,
   hp: 74,
   atk: 94,
   def: 131,
   spa: 54,
   spdef: 116,
   spe: 20
 },
 {
   name: "Klink",
   type1: "Steel",
   type2: "None",
   Evolution: 3,
   hp: 40,
   atk: 55,
   def: 70,
   spa: 45,
   spdef: 60,
   spe: 30
 },
 {
   name: "Klang",
   type1: "Steel",
   type2: "None",
   Evolution: 3,
   hp: 60,
   atk: 80,
   def: 95,
   spa: 70,
   spdef: 85,
   spe: 50
 },
 {
   name: "Klinklang",
   type1: "Steel",
   type2: "None",
   Evolution: 3,
   hp: 60,
   atk: 100,
   def: 115,
   spa: 70,
   spdef: 85,
   spe: 90
 },
 {
   name: "Tynamo",
   type1: "Electric",
   type2: "None",
   Evolution: 3,
   hp: 35,
   atk: 55,
   def: 40,
   spa: 45,
   spdef: 40,
   spe: 60
 },
 {
   name: "Eelektrik",
   type1: "Electric",
   type2: "None",
   Evolution: 3,
   hp: 65,
   atk: 85,
   def: 70,
   spa: 75,
   spdef: 70,
   spe: 40
 },
 {
   name: "Elektross",
   type1: "Electric",
   type2: "None",
   Evolution: 3,
   hp: 85,
   atk: 115,
   def: 80,
   spa: 105,
   spdef: 80,
   spe: 50
 },
 {
   name: "Elgyem",
   type1: "Psychic",
   type2: "None",
   Evolution: 2,
   hp: 55,
   atk: 55,
   def: 55,
   spa: 85,
   spdef: 55,
   spe: 30
 },
 {
   name: "Beheeyem",
   type1: "Psychic",
   type2: "None",
   Evolution: 2,
   hp: 75,
   atk: 75,
   def: 75,
   spa: 125,
   spdef: 95,
   spe: 40
 },
 {
   name: "Litwick",
   type1: "Ghost",
   type2: "Fire",
   Evolution: 3,
   hp: 50,
   atk: 30,
   def: 55,
   spa: 65,
   spdef: 55,
   spe: 20
 },
 {
   name: "Lampent",
   type1: "Ghost",
   type2: "Fire",
   Evolution: 3,
   hp: 60,
   atk: 40,
   def: 60,
   spa: 95,
   spdef: 60,
   spe: 55
 },
 {
   name: "Chandelure",
   type1: "Ghost",
   type2: "Fire",
   Evolution: 3,
   hp: 60,
   atk: 55,
   def: 90,
   spa: 145,
   spdef: 90,
   spe: 80,
 },
 {
   name: "Axew",
   type1: "Dragon",
   type2: "None",
   Evolution: 3,
   hp: 46,
   atk: 87,
   def: 60,
   spa: 30,
   spdef: 40,
   spe: 57
 },
 {
   name: "Fraxure",
   type1: "Dragon",
   type2: "None",
   Evolution: 3,
   hp: 66,
   atk: 117,
   def: 70,
   spa: 40,
   spdef: 50,
   spe: 67
 },
 {
   name: "Haxorus",
   type1: "Dragon",
   type2: "None",
   Evolution: 3,
   hp: 76,
   atk: 147,
   def: 90,
   spa: 60,
   spdef: 70,
   spe: 97
 },
 {
   name: "Cubchoo",
   type1: "Ice",
   type2: "None",
   Evolution: 2,
   hp: 55,
   atk: 70,
   def: 40,
   spa: 60,
   spdef: 40,
   spe: 40
 },
 {
   name: "Beartic",
   type1: "Ice",
   type2: "None",
   Evolution: 2,
   hp: 95,
   atk: 130,
   def: 80,
   spa: 70,
   spdef: 80,
   spe: 50
 },
 {
   name: "Cryogonal",
   type1: "Ice",
   type2: "None",
   Evolution: 1,
   hp: 80,
   atk: 50,
   def: 50,
   spa: 95,
   spdef: 135,
   spe: 105
 },
 {
   name: "Shelmet",
   type1: "Bug",
   type2: "None",
   Evolution: 2,
   hp: 50,
   atk: 40,
   def: 85,
   spa: 40,
   spdef: 65,
   spe: 25
 },
 {
   name: "Accelgor",
   type1: "Bug",
   type2: "None",
   Evolution: 2,
   hp: 80,
   atk: 70,
   def: 48,
   spa: 100,
   spdef: 60,
   spe: 145
 },
 {
   name: "Stunfisk",
   type1: "Ground",
   type2: "Electric",
   Evolution: 1,
   hp: 109,
   atk: 66,
   def: 84,
   spa: 81,
   spdef: 99,
   spe: 32
 },
 {
   name: "Mienfoo",
   type1: "Fighting",
   type2: "None",
   Evolution: 2,
   hp: 45,
   atk: 85,
   def: 50,
   spa: 55,
   spdef: 50,
   spe: 65
 },
 {
   name: "Mienshao",
   type1: "Fighting",
   type2: "None",
   Evolution: 2,
   hp: 65,
   atk: 125,
   def: 60,
   spa: 95,
   spdef: 60,
   spe: 105
 },
 {
   name: "Druddigon",
   type1: "Dragon",
   type2: "None",
   Evolution: 1,
   hp: 77,
   atk: 120,
   def: 90,
   spa: 60,
   spdef: 90,
   spe: 48
 },
 {
   name: "Golett",
   type1: "Ground",
   type2: "Ghost",
   Evolution: 2,
   hp: 59,
   atk: 74,
   def: 50,
   spa: 35,
   spdef: 50,
   spe: 35
 },
 {
   name: "Golurk",
   type1: "Ground",
   type2: "Ghost",
   Evolution: 2,
   hp: 89,
   atk: 124,
   def: 80,
   spa: 55,
   spdef: 80,
   spe: 55
 },
 {
   name: "Pawniard",
   type1: "Dark",
   type2: "Steel",
   Evolution: 2,
   hp: 45,
   atk: 85,
   def: 70,
   spa: 40,
   spdef: 40,
   spe: 60
 },
 {
   name: "Bisharp",
   type1: "Dark",
   type2: "Steel",
   Evolution: 2,
   hp: 65,
   atk: 125,
   def: 100,
   spa: 60,
   spdef: 70,
   spe: 70
 },
 {
   name: "Bouffalant",
   type1: "Normal",
   type2: "None",
   Evolution: 1,
   hp: 95,
   atk: 110,
   def: 95,
   spa: 40,
   spdef: 95,
   spe: 55
 },
 {
   name: "Rufflet",
   type1: "Normal",
   type2: "Flying",
   Evolution: 2,
   hp: 70,
   atk: 83,
   def: 50,
   spa: 37,
   spdef: 50,
   spe: 60
 },
 {
   name: "Braviary",
   type1: "Normal",
   type2: "Flying",
   Evolution: 2,
   hp: 100,
   atk: 123,
   def: 75,
   spa: 57,
   spdef: 75,
   spe: 80
 },
 {
   name: "Vullaby",
   type1: "Dark",
   type2: "Flying",
   Evolution: 2,
   hp: 70,
   atk: 55,
   def: 75,
   spa: 45,
   spdef: 65,
   spe: 60
 },
 {
   name: "Mandibuzz",
   type1: "Dark",
   type2: "Flying",
   Evolution: 2,
   hp: 110,
   atk: 65,
   def: 105,
   spa: 55,
   spdef: 95,
   spe: 80
 },
 {
   name: "Heatmor",
   type1: "Fire",
   type2: "None",
   Evolution: 1,
   hp: 85,
   atk: 97,
   def: 66,
   spa: 105,
   spdef: 66,
   spe: 65
 },
 {
   name: "Durant",
   type1: "Bug",
   type2: "Steel",
   Evolution: 1,
   hp: 58,
   atk: 109,
   def: 112,
   spa: 48,
   spdef: 48,
   spe: 109
 },
 {
   name: "Deino",
   type1: "Dark",
   type2: "Dragon",
   Evolution: 3,
   hp: 52,
   atk: 65,
   def: 50,
   spa: 45,
   spdef: 50,
   spe: 38
 },
 {
   name: "Zweilous",
   type1: "Dark",
   type2: "Dragon",
   Evolution: 3,
   hp: 72,
   atk: 85,
   def: 70,
   spa: 65,
   spdef: 70,
   spe: 58
 },
 {
   name: "Hydreigon",
   type1: "Dark",
   type2: "Dragon",
   Evolution: 3,
   hp: 92,
   atk: 105,
   def: 90,
   spa: 125,
   spdef: 90,
   spe: 98
 },
 {
   name: "Larvesta",
   type1: "Bug",
   type2: "Fire",
   Evolution: 2,
   hp: 55,
   atk: 85,
   def: 55,
   spa: 50,
   spdef: 55,
   spe: 60
 },
 {
   name: "Volcarona",
   type1: "Bug",
   type2: "Fire",
   Evolution: 2,
   hp: 85,
   atk: 60,
   def: 65,
   spa: 135,
   spdef: 105,
   spe: 100
 },
 {
   name: "Cobalion",
   type1: "Steel",
   type2: "Fighting",
   Evolution: 1,
   hp: 91,
   atk: 90,
   def: 129,
   spa: 90,
   spdef: 72,
   spe: 108
 },
 {
   name: "Terrakion",
   type1: "Rock",
   type2: "Fighting",
   Evolution: 1,
   hp: 91,
   atk: 129,
   def: 90,
   spa: 72,
   spdef: 90,
   spe: 108
 },
 {
   name: "Virizion",
   type1: "Grass",
   type2: "Fighting",
   Evolution: 1,
   hp: 91,
   atk: 90,
   def: 72,
   spa: 90,
   spdef: 129,
   spe: 108
 },
 {
   name: "Tornadus",
   type1: "Flying",
   type2: "None",
   Evolution: 1,
   hp: 79,
   atk: 115,
   def: 70,
   spa: 125,
   spdef: 80,
   spe: 111
 },
 {
   name: "Thundurus",
   type1: "Electric",
   type2: "Flying",
   Evolution: 1,
   hp: 79,
   atk: 115,
   def: 70,
   spa: 125,
   spdef: 80,
   spe: 111
 },
 {
   name: "Reshiram",
   type1: "Dragon",
   type2: "Fire",
   Evolution: 1,
   hp: 100,
   atk: 120,
   def: 100,
   spa: 150,
   spdef: 120,
   spe: 90
 },
 {
   name: "Zekrom",
   type1: "Dragon",
   type2: "Electric",
   Evolution: 1,
   hp: 100,
   atk: 150,
   def: 120,
   spa: 120,
   spdef: 100,
   spe: 90
 },
 {
   name: "Landorus",
   type1: "Ground",
   type2: "Flying",
   Evolution: 1,
   hp: 89,
   atk: 125,
   def: 90,
   spa: 115,
   spdef: 80,
   spe: 101
 },
 {
   name: "Kyurem",
   type1: "Dragon",
   type2: "Ice",
   Evolution: 1,
   hp: 125,
   atk: 130,
   def: 90,
   spa: 130,
   spdef: 90,
   spe: 95
 },
 {
   name: "Keldeo",
   type1: "Water",
   type2: "Fighting",
   Evolution: 1,
   hp: 91,
   atk: 72,
   def: 90,
   spa: 129,
   spdef: 90,
   spe: 108
 },
 {
   name: "Meloetta",
   type1: "Normal",
   type2: "Psychic",
   Evolution: 1,
   hp: 100,
   atk: 77,
   def: 77,
   spa: 128,
   spdef: 128,
   spe: 90
 },
 {
   name: "Genesect",
   type1: "Bug",
   type2: "Steel",
   Evolution: 1,
   hp: 71,
   atk: 120,
   def: 95,
   spa: 120,
   spdef: 95,
   spe: 99
 }

];
var highscore = localStorage.getItem("highscore");
document.getElementById("howto").onclick = function () {
  location.href = "howToPlay.html";
};
document.getElementById("home").onclick = function () {
  location.href = "index.html";
};
//document.getElementById("dexList").onclick = function() {
 //alert("Victini, Snivy, Servine, Serperior, Tepig, Pignite, Emboar, Oshawott, Dewott, Samurott, Patrat, Watchog, Lillipup, Herdier, Stoutland, Purrloin, Liepard, Pansage, Simisage, Pansear, Simisear, Panpour, Simipour, Munna, Musharna, Pidove, Tranquill, Unfezant, Blitzle, Zebstrika, Roggenrola, Boldore, Gigalith, Woobat, Swoobat, Drilbur, Excadrill, Audino, Timburr, Gurdurr, Conkeldurr, Tympole, Palpitoad, Seismitoad, Throh, Sawk, Sewaddle, Swadloon, Leavanny, Venipede, Whirlipede, Scolipede, Cottonee, Whimsicott, Petilil, Lilligant, Basculin, Sandile, Krokorok, Krookodile, Darumaka, Darmanitan, Darmanitan Zen, Maractus, Dwebble, Crustle, Scraggy, Scrafty, Sigilyph, Yamask, Cofagrigus, Tirtouga, Carracosta, Archen, Archeops, Trubbish, Garbodor, Zorua, Zoroark, Minccino, Cinccino, Gothita, Gothorita, Gothitelle, Solosis, Duosion, Reuniclus, Ducklett, Swanna, Vanillite, Vanillish, Vanilluxe, Deerling, Sawsbuck, Emolga, Karrablast, Escavalier, Foongus, Amoonguss, Frillish, Jellicent, Alomomola, Joltik, Galvantula, Ferroseed, Ferrothorn, Klink, Klang, Klinklang, Tynamo, Eelektrik, Eelektross, Elgyem, Beheeyem, Litwick, Lampent, Chandelure, Axew, Fraxure, Haxorus, Cubchoo, Beartic, Cryogonal, Shelmet, Accelgor, Stunfisk, Mienfoo, Mienshao, Druddigon, Golett, Golurk, Pawniard, Bisharp, Bouffalant, Rufflet, Braviary, Vullaby, Mandibuzz, Heatmor, Durant, Deino, Zweilous, Hydreigon, Larvesta, Volcarona, Cobalion, Terrakion, Virizion, Tornadus, Thundurus, Reshiram, Zekrom, Landorus, Kyurem, Keldeo, Meloetta, Genesect")
//}


function printObject(randomObject, formId) {
 // Get a reference to the form
 const form = document.getElementById(formId);
form.className = "msg"
 // Remove previous elements from the form
 while (form.firstChild) {
   form.removeChild(form.firstChild);
 }

 // Iterate over the properties of the object
 for (const property in randomObject) {
   if (randomObject.hasOwnProperty(property)) {
     // Create a new div element
     const div = document.createElement('div');

     // Create a new label element
     const label = document.createElement('label');
     label.innerHTML = property + ': ';
     div.appendChild(label);

     // Create a new input element

     const input = document.createElement('label');
     input.innerHTML = randomObject[property];
     div.appendChild(input);

     // Add the div element to the form
     form.appendChild(div);
   }
 }
 const imgdiv = document.createElement('div');
 const img = document.createElement('img');
 img.src = 'sprt/' + randomObject['name'].toLowerCase() + '.gif';
 imgdiv.appendChild(img);
 form.appendChild(imgdiv);
}

function printMessage(message, formId) {
 const form = document.getElementById(formId);

 const div = document.createElement('div');
 const msg = document.createElement('label');
 msg.innerHTML = message;
 msg.className = "msg";
 div.appendChild(msg);

 form.insertBefore(div, form.firstChild);

}


//Randomizer
function getRandomPokemon(array) {
 const randomObject = array[Math.floor(Math.random() * array.length)];
 return randomObject;
}

//Randomize

function reroll() {
 outputRandomObject(Dex, "pokemon")
}

////////////
const hiddenPokemon = getRandomPokemon(Dex);
//console.log('Hidden pokemon is: ' + hiddenPokemon.name);


function findPokemonByName(searchTerm) {

 pmon = Dex.find(o => o.name.toLowerCase() === searchTerm.toLowerCase());
 return pmon;
}

//reroll button
//document.getElementById("reroll").onclick = function() {
//reroll()
//};
var count = 0;

let find = document.getElementById("find");
find.onclick =  plswork 
function plswork(){
searchTerm = document.getElementById("pname").value.toString();
 //Counts Guess
 score = score + 1;
 count = count + 1;
 //searchPokemon(searchTerm, "pokemon");
 console.log('Finding:' + searchTerm);
 var guess = findPokemonByName(searchTerm);
 console.log('Guess was: ' + guess.name);
 //console.log('Hidden is: ' + hiddenPokemon.name);
 var secrt = ' '
 if ((guess.name == "Volcarona") && (hiddenPokemon.name === "Volcarona")) {
   secrt = "Hestia";
 } else if ((guess.name == "Lillipup") && (hiddenPokemon.name === "Lillipup")) {
   secrt = "Dog Thing";
 } else if ((guess.name == "Dewott") && (hiddenPokemon.name === "Dewott")) {
   secrt = "It's a secret Dewott!!!";
 }

 //Winning statement

 if (guess.name == hiddenPokemon.name) {

   if (highscore != null) {
     if ((score < highscore) || (score === 1)) {
       localStorage.setItem("highscore", score);
       alert("You got the high Score", formId);
     }
   } else {
     localStorage.setItem("highscore", score);
     alert("You got the high Score",formId);
   }
   printObject(guess, formId);
   printMessage(secrt, formId);
   printMessage(" YOU GUESSED CORRECTLY AFTER " + count + " GUESS(ES)! THE POKEMON WAS : ", formId);


   printMessage(("------------------------------------"), formId);
   printMessage("Hi-Score: " + localStorage.getItem("highscore") + " Guess(es)", formId);
   hideUnhide();

 } else if (guess.name !== hiddenPokemon.name) {


     //console.log("guess:");
   //console.log(guess);
   //console.log("hidden:");
   //console.log(hiddenPokemon);
   if (guess.hp < hiddenPokemon.hp) {
     printMessage((guess.hp + "	HP : ▲"), formId);
     //console.log("Hidden has a higher HP")
   } else if (guess.hp == hiddenPokemon.hp) {
     printMessage((guess.hp + " HP : ✔️"), formId);
     //console.log("Hidden has the same HP")
   } else {
     printMessage((guess.hp + " HP : ▼"), formId);
     //console.log("Hidden has lower HP");
   }
   console.log("guess atk: " + guess.atk + "-- hidden atk: " + hiddenPokemon.atk)
   if (guess.atk < hiddenPokemon.atk) {
     printMessage((guess.atk + "	ATK : ▲"), formId);
   } else if (guess.atk == hiddenPokemon.atk) {
     printMessage((guess.atk + " ATK : ✔️"), formId);
   } else {
     printMessage((guess.atk + " ATK : ▼"), formId);
   }
   if (guess.def < hiddenPokemon.def) {
     printMessage((guess.def + "	DEF : ▲"), formId);
   } else if (guess.def == hiddenPokemon.def) {
     printMessage((guess.def + " DEF : ✔️"), formId);
   } else {
     printMessage((guess.def + " DEF : ▼"), formId);
   }
   if (guess.spa < hiddenPokemon.spa) {
     printMessage((guess.spa + " SPA : ▲"), formId);
   } else if (guess.spa == hiddenPokemon.spa) {
     printMessage((guess.spa + " SPA : ✔️"), formId);
   } else {
     printMessage((guess.spa + " SPA : ▼"), formId);
   }
   if (guess.spdef < hiddenPokemon.spdef) {
     printMessage((guess.spdef + "	SPDEF : ▲"), formId);
   } else if (guess.spdef == hiddenPokemon.spdef) {
     printMessage((guess.spdef + " SPDEF : ✔️"), formId);
   } else {
     printMessage((guess.spdef + " SPDEF : ▼"), formId);
   }
   if (guess.spe < hiddenPokemon.spe) {
     printMessage((guess.spe + "	SPE : ▲"), formId);
   } else if (guess.spe == hiddenPokemon.spe) {
     printMessage((guess.spe + " SPE : ✔️"), formId);
   } else {
     printMessage((guess.spe + " SPE : ▼"), formId);
   }

   if ((guess.Evolution < hiddenPokemon.Evolution) || (guess.Evolution > hiddenPokemon.Evolution)) {
     printMessage((guess.Evolution + " Evolution(s) : ❌"), formId);
   } else {
     printMessage((guess.Evolution + " Evolution(s) : ✔️"), formId);
   }

   if (((guess.type2 == hiddenPokemon.type2) || (guess.type2 == hiddenPokemon.type1)) && (hiddenPokemon.type2 == "None")) {
     printMessage("No Second Type", formId);
   } else if (((guess.type2 == hiddenPokemon.type2) || (guess.type2 == hiddenPokemon.type1)) && (hiddenPokemon.type2 != "None")) {
     printMessage(guess.type2 + " : ✔️", formId);
   } else {
     printMessage(guess.type2 + " : ❌", formId);
   }

   if ((guess.type1 == hiddenPokemon.type1) || (guess.type1 == hiddenPokemon.type2)) {
     printMessage(guess.type1 + " : ✔️", formId);
   } else {
     printMessage(guess.type1 + " : ❌", formId);
   }
   if (guess.name != hiddenPokemon.name) {
     printMessage(guess.name + " : ❌", formId);
   }

   const imgdiv = document.createElement('div');
   const img = document.createElement('img');
   img.src = 'sprt/' + guess.name.toLowerCase() + '.gif';
   imgdiv.appendChild(img);
   const form = document.getElementById(formId);
   form.insertBefore(imgdiv, form.firstChild);

   printMessage(("------------------------------------"), formId);
 }
 document.getElementById("pname").value = "";
}

//await both random and guess to compare
var formId = "pokemon";

//alert('Press \'OK\' to continue to game screen');

document.getElementById('reroll').onclick = function() {
 location.reload();
};

function hideUnhide() {
 document.getElementById('find').style.display = 'none';
 document.getElementById('pname').style.display = 'none';
 document.getElementById('reroll').style.display = 'initial';
}

document.getElementById('reroll').style.display = 'none';



function lightwell(request, response) {
 function hasMatch(s) {
   return s.toLowerCase().indexOf(request.term.toLowerCase()) !== -1;
 }
 var i, l, obj, matches = [];

 if (request.term === "") {
   response([]);
   return;
 }

 for (i = 0, l = Dex.length; i < l; i++) {
   obj = Dex[i];
   if (hasMatch(obj.name)) {
     matches.push(obj);
   }
 }
 response(matches);
}

$("#pname").autocomplete({
   minLength: 0,
   source: lightwell,
   focus: function(event, ui) {
     $("#pname").val(ui.item.name);
     return false;
   },
   select: function(event, ui) {

     $("#project-id").val(ui.item.name);

     $("#project-description").html(ui.item.type1);
     $("#project-other").html(ui.item.type2);

     return false;
   }
 })

 .data("ui-autocomplete")._renderItem = function(ul, item) {
   return $("<li>")
     .append("<a>" + item.name +
       "<br><span style='font-size: 70%;'>Type 1: " + item.type1 + "</span>" +
       "<br><span style='font-size: 70%;'>Type 2: " + item.type2 + "</span></a>")
     .appendTo(ul);


 }
 
 $(document).bind('keyup', function(e) {
 if (e.which == 27) {
   if (confirm("Do you wish to restart?")) {
     window.location.reload();
   } else {
     alert("You have chosen to not reset.")
   }
 }else if(e.which == 13){
 plswork();
 }
 
});

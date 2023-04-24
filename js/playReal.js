
var audio = new Audio('https://ia801606.us.archive.org/10/items/battle-vs-subway-boss-pokmon-masters-ex-hq/Battle%20Vs%20Subway%20Boss%20Pokmon%20Masters%20EX%20HQ%20.mp3');
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

// this is where the array used to be


var highscoreR = localStorage.getItem("highscoreR");
document.getElementById("howto").onclick = function () {
  location.href = "howToPlay.html";
};
document.getElementById("home").onclick = function () {
  location.href = "index.html";
};
document.getElementById("practice").onclick = function () {
  location.href = "play.html";
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

if(Dex.some(pokemon => pokemon.name.toLowerCase === searchTerm.toLowerCase)){
  //searchPokemon(searchTerm, "pokemon");
 console.log('Finding:' + searchTerm);
 var guess = findPokemonByName(searchTerm);
 if(guess!=undefined){
 score = score + 1;
 count = count + 1;
 
  
 
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
 var limitBreak = 8
 //Winning statement
 if ((guess.name == hiddenPokemon.name) || (score === limitBreak)) {
  if ((highscoreR != null) && ((guess.name == hiddenPokemon.name) )) {
    if((score <=  limitBreak) && (guess.name == hiddenPokemon.name)){
    if ((score < highscoreR) || (score === 1)) {
      localStorage.setItem("highscoreR", score);
      alert("You got the high Score", formId);
    }
  }else if((highscoreR != null) && ((guess.name == hiddenPokemon.name) )) {
    
    localStorage.setItem("highscoreR", score);
    alert("You got the high Score",formId);
    
  }else if(highscoreR == null){
    localStorage.setItem("highscoreR", score);
    alert("You got the high Score",formId);
  }else{
    alert("Better luck next time!",formId);
  }
}

  printObject(hiddenPokemon, formId);
  printMessage(secrt, formId);
  if((score <=  limitBreak) && (guess.name == hiddenPokemon.name)){
  printMessage(" YOU GUESSED CORRECTLY AFTER " + count + " GUESS(ES)! THE POKEMON WAS : ", formId);
  }else{
    printMessage(" BETTER LUCK NEXT TIME! THE POKEMON WAS : ", formId);
  }

  printMessage(("------------------------------------"), formId);
  printMessage("Hi-Score: " + localStorage.getItem("highscoreR") + " Guess(es)", formId);
  hideUnhide();

 }else if (guess.name !== hiddenPokemon.name) {


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
   var limit = limitBreak - count;
  printMessage(("You have " + limit + " guess(es) left!"), formId);
   printMessage(("------------------------------------"), formId);
 }
 document.getElementById("pname").value = "";

}else{
  alert("That is not a Generation V Pokemon!");
}
}
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

document.getElementById("home").onclick = function () {
    location.href = "index.html";
  };
  document.getElementById("play").onclick = function () {
    location.href = "play.html";
  };
  var audio = new Audio('https://ia904501.us.archive.org/9/items/28-battle-trainer/21%20-%20A%20Lullaby%20for%20Trains%20%5BBonus%20Track%5D.mp3');
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

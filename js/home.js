document.getElementById("howto").onclick = function () {
    location.href = "howToPlay.html";
  };
  document.getElementById("play").onclick = function () {
    location.href = "play.html";
  };
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
  




videojs.registerPlugin('backgroundVideo', function() {
  // Get a reference to the player and the Play/Pause button in the article block
    var myPlayer = this,
        pauseButton = document.querySelector("#article button");

    // +++ Configure video end +++
    // Listen for the ended event and display Play button
    myPlayer.on("ended", function() {
        pauseButton.innerHTML = "Play";
    });

    // +++ Configure the Play/Pause button +++
    // Listen for a click event on the Play/Pause button
    // Alternate between play and pause states
    pauseButton.addEventListener("click", function() {
      if (myPlayer.paused()) {
        myPlayer.play();
        pauseButton.innerHTML = "Pause";
      } else {
        myPlayer.pause();
        pauseButton.innerHTML = "Play";
      }
    });
});

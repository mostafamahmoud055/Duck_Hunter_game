var duck = document.querySelector(".duck");
var cursor = document.querySelector(".cursor");
var blood = document.querySelector(".blood");
var audio = document.querySelector("audio");
var button = document.querySelector("button");
var Score = 0;
var screenWidth = document.body.offsetWidth;
var screenHeight = document.body.offsetHeight;
blood.style.display = "none";

window.addEventListener("mousemove", function (e) {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
button.addEventListener("click", function () {
  button.innerHTML = "hunt...";
  window.addEventListener("click", function (e) {
    audio.currentTime = 0;
    if (e.target.classList.contains("duck")) {
      button.innerHTML = "Score: " + ++Score;
      blood.style.left = e.pageX + "px";
      blood.style.top = e.pageY + "px";
      blood.style.display = "block";
      setTimeout(function () {
        blood.style.display = "none";
      }, 1000);
    }
    audio.play();
  });
  setInterval(function () {
    randLeft = Math.random() * screenWidth;
    randTop = Math.random() * screenHeight;
    duck.style.left = randLeft + "px";
    duck.style.top = randTop + "px";
  }, 1000);
});

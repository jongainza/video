const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
const video = document.querySelector(".video-container");
const btn = document.querySelector(".switch-btn");

btn.addEventListener("click", function () {
  if (btn.classList.contains("slide")) {
    btn.classList.remove("slide");
    video.play();
  } else {
    btn.classList.add("slide");
    video.pause();
  }
});

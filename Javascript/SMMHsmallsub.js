// Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 480,
    delay: (el, i) => 85 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1240,
    easing: "easeOutExpo",
    delay: 680
  });
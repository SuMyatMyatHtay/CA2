anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 600
  }).add({
    targets: '.ml5 .line',
    duration: 500,
    delay: 150,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.825*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 500,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 500,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 500,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 900,
    easing: "easeOutExpo",
    delay: 1050
  });
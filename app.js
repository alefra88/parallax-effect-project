const d = document,
  w = window,
  $bg = d.getElementById("bg"),
  $moon = d.getElementById("moon"),
  $mountain = d.getElementById("mountain"),
  $road = d.getElementById("road"),
  $text = d.getElementById("text");

window.addEventListener("scroll", () => {
  let val = window.scrollY;
  $bg.style.top = val * 0.5 + "px";
  $moon.style.left = val * 0.5 + "px";
  $mountain.style.top = val * 0.15 + "px";
  $road.style.top = val * 0.15 + "px";
  $text.style.top = val * 1 + "px";
});

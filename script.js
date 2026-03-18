const headline = document.getElementById("headline");
const visual = document.getElementById("visual");

const text = "WELCOME ITZ FIZZ";

text.split("").forEach((char, index) => {
  const span = document.createElement("span");
  span.innerHTML = char === " " ? "&nbsp;&nbsp;" : char;
  span.style.animationDelay = `${index * 0.06}s`;
  headline.appendChild(span);
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const moveY = Math.min(scrollY * 0.35, 220);
  const rotate = Math.min(scrollY * 0.02, 10);
  const scale = Math.max(1 - scrollY * 0.0002, 0.92);

  visual.style.transform = `translateY(${moveY}px) rotate(${rotate}deg) scale(${scale})`;
});
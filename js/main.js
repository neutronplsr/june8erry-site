const pageContent = document.createElement("main");
pageContent.className = "content panel";
while (document.body.firstChild) {
  pageContent.appendChild(document.body.firstChild);
}

const starfield = document.createElement("div");
starfield.className = "starfield";
const starColors = ["#ffffff", "#cde4ff", "#fff2c8"];
for (let i = 0; i < 40; i++) {
  const star = document.createElement("div");
  star.className = "star";
  const size = 3 + Math.random() * 3;
  const color = starColors[Math.floor(Math.random() * starColors.length)];
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.backgroundColor = color;
  star.style.boxShadow = `0 0 ${size * 2}px ${color}`;
  star.style.animationDuration = `${0.8 + Math.random()}s`;
  star.style.animationDelay = `${Math.random() * 2}s`;
  starfield.appendChild(star);
}
document.body.appendChild(starfield);

const sidebar = document.createElement("nav");
sidebar.className = "sidebar panel";
sidebar.innerHTML = `
<div class="nav-box"><a href="/"><img class="nav-icon" src="/media/home.gif" alt="home"></a></div>
<div class="nav-box"><a href="/writting/"><img class="nav-icon" src="/media/writting.gif" alt="writting"></a></div>
<div class="nav-box"><a href="/music/"><img class="nav-icon" src="/media/music.gif" alt="music"></a></div>
<div class="nav-box"><a href="/research/"><img class="nav-icon" src="/media/research.gif" alt="research"></a></div>
<div class="nav-box"><a href="/about/"><img class="nav-icon" src="/media/about-me.gif" alt="about me"></a></div>
<div class="nav-box"><a href="/credits/"><img class="nav-icon" src="/media/credits.gif" alt="credits"></a></div>
<div class="nav-box"><button id="font-toggle"><img class="nav-icon" src="/media/button.gif" alt="toggle dyslexic friendly font"></button></div>
`;

const layout = document.createElement("div");
layout.className = "layout";
layout.appendChild(sidebar);
layout.appendChild(pageContent);

document.body.appendChild(layout);

if (localStorage.getItem("monoFont") === "true") {
  document.body.classList.add("mono-font");
}

const fontToggle = document.getElementById("font-toggle");
fontToggle.addEventListener("click", () => {
  document.body.classList.toggle("mono-font");
  localStorage.setItem("monoFont", document.body.classList.contains("mono-font"));
});

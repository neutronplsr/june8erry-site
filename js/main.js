const footer = document.createElement("footer");
footer.innerHTML = `
<nav>
<a href="/">home</a>
<a href="/music/">music</a>
<a href="/research/">research</a>
<a href="/about/">about me</a>
</nav>
<button id="font-toggle">toggle dyslexic friendly font</button>
`;
document.body.appendChild(footer);

const fontToggle = document.getElementById("font-toggle");

fontToggle.addEventListener("click", () => {
  document.body.classList.toggle("mono-font");
});

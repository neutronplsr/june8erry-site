const pageContent = document.createElement("main");
pageContent.className = "content panel";
while (document.body.firstChild) {
  pageContent.appendChild(document.body.firstChild);
}

const sidebar = document.createElement("nav");
sidebar.className = "sidebar panel";
sidebar.innerHTML = `
<div class="nav-box"><a href="/">home</a></div>
<div class="nav-box"><a href="/blog/">blog</a></div>
<div class="nav-box"><a href="/music/">music</a></div>
<div class="nav-box"><a href="/research/">research</a></div>
<div class="nav-box"><a href="/about/">about me</a></div>
`;

const layout = document.createElement("div");
layout.className = "layout";
layout.appendChild(sidebar);
layout.appendChild(pageContent);

const siteFooter = document.createElement("footer");
siteFooter.className = "site-footer panel";
siteFooter.innerHTML = `
site by june*
<div id="footer-credit">heavily inspired by <a href="https://awawawa.world/homepage">j's site</a></div>
<button id="font-toggle">toggle dyslexic friendly font</button>
`;

document.body.appendChild(layout);
document.body.appendChild(siteFooter);

if (localStorage.getItem("monoFont") === "true") {
  document.body.classList.add("mono-font");
}

const fontToggle = document.getElementById("font-toggle");
fontToggle.addEventListener("click", () => {
  document.body.classList.toggle("mono-font");
  localStorage.setItem("monoFont", document.body.classList.contains("mono-font"));
});

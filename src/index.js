import "./style.css";
import Home from "./home.js";
import Menu from "./menu.js";
import About from "./about.js";
if (process.env.NODE_ENV === "development") {
  require("./index.html");
}

const buttons = document.getElementsByTagName("button");

const content = document.getElementById("content");
content.appendChild(Home());

for (let b of buttons) {
  b.addEventListener("click", OnMenuItemClicked);
}

function OnMenuItemClicked(event) {
  content.innerHTML = "";
  switch (event.target.id) {
    case "Home":
      content.appendChild(Home());
      break;
    case "Menu":
      content.appendChild(Menu());
      break;
    case "About":
      content.appendChild(About());
      break;
    default:
      break;
  }
}

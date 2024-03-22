import "./style.css";
if (process.env.NODE_ENV === "development") {
  require("./index.html");
}

const buttons = document.getElementsByTagName("button");

for (let b of buttons) {
  b.addEventListener("click", OnMenuItemClicked);
}

function OnMenuItemClicked(event) {
  console.log(event.target);
}

export default function () {
  const tab = document.createElement("div");

  const header = document.createElement("h1");
  header.innerText = "Our Menu";
  tab.appendChild(header);

  const bfastMenuHeader = document.createElement("h2");
  bfastMenuHeader.innerText = "Breakfast Menu";
  tab.appendChild(bfastMenuHeader);
  const bfastMenu = document.createElement("p");
  bfastMenu.innerHTML = "Pancakes<br>Milk & Cereal<br>Grilled Cheese Sandwich";
  tab.appendChild(bfastMenu);

  const lunchfastMenuHeader = document.createElement("h2");
  lunchfastMenuHeader.innerText = "Lunch Menu";
  tab.appendChild(lunchfastMenuHeader);
  const lunchMenu = document.createElement("p");
  lunchMenu.innerHTML = "Fried Chicken<br>Double Cheese Burger";
  tab.appendChild(lunchMenu);

  const dinnerfastMenuHeader = document.createElement("h2");
  dinnerfastMenuHeader.innerText = "Breakfast Menu";
  tab.appendChild(dinnerfastMenuHeader);
  const dinnerfastMenu = document.createElement("p");
  dinnerfastMenu.innerHTML = "Steak & Fries";
  tab.appendChild(dinnerfastMenu);

  return tab;
}

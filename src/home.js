// Put the contents of each ‘tab’ inside of its own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.

export default function () {
  const tab = document.createElement("div");

  const header = document.createElement("h1");
  header.innerText = "The Simple Bar";
  tab.appendChild(header);

  const desc = document.createElement("p");
  desc.innerText = "We aim to serve good and simple food";
  tab.appendChild(desc);

  const hoursHeader = document.createElement("h2");
  hoursHeader.innerText = "Opening Hours";
  tab.appendChild(hoursHeader);
  const hours = document.createElement("p");
  hours.innerText = "Everyday: 8am-12am";
  tab.appendChild(hours);

  const locationHeader = document.createElement("h2");
  locationHeader.innerText = "Location";
  tab.appendChild(locationHeader);
  const location = document.createElement("p");
  location.innerText = "123 Lorem avenue, Ipsum";
  tab.appendChild(location);

  return tab;
}

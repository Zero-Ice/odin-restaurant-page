export default function () {
  const tab = document.createElement("div");

  const header = document.createElement("h1");
  header.innerText = "Contact Us";
  tab.appendChild(header);

  const contact = document.createElement("p");
  contact.innerHTML = "Phone: 12345678<br>Email:thesimplebar@simple.com";
  tab.appendChild(contact);

  return tab;
}

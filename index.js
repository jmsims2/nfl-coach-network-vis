import coaches from "./coaches.json";
let root = document.getElementById("root");
let ul = document.createElement("ul");
let nflCoaches = coaches
  .filter(c => c.year === 2019)
  .sort((a, b) => a.name.localeCompare(b.name));
nflCoaches.forEach(c => {
  let li = document.createElement("li");
  li.innerHTML = c.name;
  ul.appendChild(li);
});
root.appendChild(ul);

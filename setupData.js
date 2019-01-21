const fs = require("fs");
const _ = require("lodash");
const d3 = require("d3");
const coaches = require("./coaches.json");

let data = {
  nodes: [],
  links: []
};

let links = [];

data.nodes = coaches.filter(c => c.year === 2019);

data.nodes.forEach(node => {
  let career = coaches.filter(coach => coach.name === node.name);
  career.forEach(c => {
    coaches.forEach(coach => {
      if (coach.name !== node.name) {
        if (c.team === coach.team && c.year === coach.year) {
          links.push({ source: c.name, target: coach.name });
        }
      }
    });
  });
});

links.forEach(link => {
  let index = _.findIndex(data.links, {
    source: link.source,
    target: link.target
  });
  if (index > -1) {
    data.links[index].weight += 1;
  } else {
    let reverseIndex = _.findIndex(data.links, {
      source: link.target,
      target: link.source
    });
    if (reverseIndex < 0) {
      data.links.push({
        source: link.source,
        target: link.target,
        weight: 1
      });
    }
  }
});

let weights = data.links.map(l => l.weight);
let scale = d3
  .scaleLinear()
  .domain([0, d3.max(weights)])
  .range([0, 1]);
data.links = data.links.map(l => {
  l.weight = scale(l.weight);
  return l;
});
fs.writeFile("data.json", JSON.stringify(data), "utf8", err => {
  if (err) throw err;
  console.log("data written to data.json");
});

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
    data.links[index].strength += 1;
  } else {
    data.links.push({ source: link.source, target: link.target, strength: 1 });
  }
});

let strengths = data.links.map(l => l.strength);
let scale = d3
  .scaleLinear()
  .domain([0, d3.max(strengths)])
  .range([0, 1]);
data.links = data.links.map(l => {
  l.strength = scale(l.strength);
  return l;
});

console.log(data.links);

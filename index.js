import data from "./data.json";
import * as d3 from "d3";

console.log("nodes", data.nodes);
data.links.forEach(l => console.log("link", l));

let width = Math.max(
  document.documentElement.clientWidth,
  window.innerWidth || 0
);
let height =
  Math.max(document.documentElement.clientHeight, window.innerHeight || 0) -
  150;

var simulation = d3
  .forceSimulation()
  .force(
    "link",
    d3
      .forceLink()
      .id(function(d) {
        return d.name;
      })
      .distance(50)
  )
  .force("charge", d3.forceManyBody().strength(-400))
  .force("center", d3.forceCenter(width / 2, height / 2));

d3.select("svg").empty();

let tooltip = d3
  .select("body")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("border-width", "2px")
  .style("border-radius", "5px")
  .style("padding", "5px")
  .style("position", "absolute");

let svg = d3
  .select("svg")
  .attr("width", width)
  .attr("height", height);

// let defs = svg.append("defs");

// let imgPattern = defs
//   .selectAll("pattern")
//   .data(data.nodes)
//   .enter()
//   .append("pattern")
//   .attr("id", d => {
//     return `${d.name
//       .toLowerCase()
//       .replace(" ", "-")
//       .replace("'", "")}`;
//   })
//   .attr("width", 1)
//   .attr("height", 1)
//   .attr("patternUnits", "objectBoundingBox")
//   .append("image")
//   .attr("x", 0)
//   .attr("y", 0)
//   .attr("width", 40)
//   .attr("height", 40)
//   .attr("xlink:xlink:href", d => {
//     return `./images/${d.name
//       .toLowerCase()
//       .replace(" ", "-")
//       .replace("'", "")}.png`;
//   });

let link = svg
  .append("g")
  .attr("class", "links")
  .selectAll("line")
  .data(data.links)
  .enter()
  .append("line");

let node = svg
  .append("g")
  .attr("class", "nodes")
  .selectAll("circle")
  .data(data.nodes)
  .enter()
  .append("circle")
  .attr("r", 20)
  .attr("fill", d => {
    return `url(#${d.name
      .toLowerCase()
      .replace(" ", "-")
      .replace("'", "")})`;
  });

simulation.nodes(data.nodes).on("tick", ticked);
simulation.force("link").links(data.links);

function ticked() {
  link
    .attr("x1", function(d) {
      return d.source.x;
    })
    .attr("y1", function(d) {
      return d.source.y;
    })
    .attr("x2", function(d) {
      return d.target.x;
    })
    .attr("y2", function(d) {
      return d.target.y;
    });

  node
    .attr("cx", function(d) {
      return d.x;
    })
    .attr("cy", function(d) {
      return d.y;
    });
}

let mouseover = function(d) {
  tooltip.style("opacity", 1);
  d3.select(this).style("stroke-width", "5px");
};
let mousemoveNode = function(d) {
  tooltip
    .html(d.name)
    .style("left", d3.mouse(this)[0] + 30 + "px")
    .style("top", d3.mouse(this)[1] + "px");
};
let mousemoveLink = function(d) {
  console.log("link", d);
  tooltip
    .html(
      `${d.source.name} &#8596 ${d.target.name}<br/>${d.links.join("<br/>")}`
    )
    .style("left", d3.mouse(this)[0] + 30 + "px")
    .style("top", d3.mouse(this)[1] + "px");
};
let mouseleave = function(d) {
  tooltip.style("opacity", 0);
  d3.select(this).style("stroke-width", "3px");
};

d3.selectAll("circle")
  .on("mouseover", mouseover)
  .on("mousemove", mousemoveNode)
  .on("mouseleave", mouseleave)
  .on("click", connectedNodes);

d3.selectAll("line")
  .on("mouseover", d => tooltip.style("opacity", 1))
  .on("mousemove", mousemoveLink)
  .on("mouseleave", d => tooltip.style("opacity", 0));

let toggle = 0;
//Create an array logging what is connected to what
let linkedByIndex = {};
for (let i = 0; i < data.nodes.length; i++) {
  linkedByIndex[i + "," + i] = 1;
}
data.links.forEach(function(d) {
  linkedByIndex[d.source.index + "," + d.target.index] = 1;
});
//This function looks up whether a pair are neighbours
function neighboring(a, b) {
  return linkedByIndex[a.index + "," + b.index];
}
function connectedNodes() {
  if (toggle == 0) {
    //Reduce the opacity of all but the neighbouring nodes
    let d = d3.select(this).node().__data__;
    node.style("opacity", function(o) {
      return neighboring(d, o) | neighboring(o, d) ? 1 : 0.1;
    });
    link.style("opacity", function(o) {
      return (d.index == o.source.index) | (d.index == o.target.index)
        ? 1
        : 0.1;
    });
    //Reduce the op
    toggle = 1;
  } else {
    //Put them back to opacity=1
    node.style("opacity", 1);
    link.style("opacity", 1);
    toggle = 0;
  }
}

import data from "./data.json";
import * as d3 from "d3";

console.log("nodes", data.nodes);
data.links.forEach(l => console.log("link", l));

let width = 1000;
let height = 500;

var simulation = d3
  .forceSimulation()
  .force(
    "link",
    d3.forceLink().id(function(d) {
      return d.name;
    })
  )
  .force(
    "charge",
    d3
      .forceManyBody()
      .strength(-300)
      .distanceMax(550)
      .distanceMin(200)
  )
  .force("center", d3.forceCenter(width / 2, height / 2));

d3.select("svg").empty();

let svg = d3.select("svg");

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
  .attr("r", 20);
//.attr("fill", "url(#image)");
//.attr("filter", "url(#inset-shadow)");

node.append("title").text(function(d) {
  return d.name;
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

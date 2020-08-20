let chairs = [
  { color: "blue", cost: 12.0 },
  { color: "red", cost: 11.5 },
  { color: "yellow", cost: 8.0 },
  { color: "pink", cost: 13.0 }
];

chairs.forEach(function(chair) {
  console.log(chair.color + " color one costs $" + chair.cost + ".");
});

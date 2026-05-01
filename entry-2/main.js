var toolbar = document.querySelector("#toolbar");
var currentTool = "mushroom";



function selectFlower()   { currentTool = "flower";   toolbar.textContent = "tool: flower"; }
function selectTree()     { currentTool = "tree";     toolbar.textContent = "tool: tree"; }
function selectFence()    { currentTool = "fence";    toolbar.textContent = "tool: fence"; }
function selectHouse()    { currentTool = "house";    toolbar.textContent = "tool: house"; }
function selectStone()    { currentTool = "stone";    toolbar.textContent = "tool: stone"; }
function selectMushroom() { currentTool = "mushroom"; toolbar.textContent = "tool: mushroom"; }

function placeCurrentTool(x, y) {
  if (currentTool === "flower")   plantFlower(x, y);
  if (currentTool === "tree")     plantTree(x, y);
  if (currentTool === "fence")    buildFence(x, y);
  if (currentTool === "house")    buildHouse(x, y);
  if (currentTool === "stone")    dropStone(x, y);
  if (currentTool === "mushroom") plantMushroom(x, y);
}


function plantFlower(x, y) {
  var flowers = ["🥀", "🌑", "🌒", "🌕"];
  var pick = flowers[Math.floor(Math.random() * flowers.length)];
  var el = document.createElement("div");
  el.classList.add("placed");
  el.textContent = pick;
  el.style.fontSize = Math.floor(Math.random() * 20) + 20 + "px";
  el.style.left = x + "px";
  el.style.top = y + "px";
  document.body.appendChild(el);
}

function plantTree(x, y) {
  var trees = ["🌲", "🎃", "🕸️"];
  var pick = trees[Math.floor(Math.random() * trees.length)];
  var el = document.createElement("div");
  el.classList.add("placed");
  el.textContent = pick;
  el.style.fontSize = Math.floor(Math.random() * 30) + 40 + "px";
  el.style.left = x + "px";
  el.style.top = y + "px";
  document.body.appendChild(el);
}

function buildFence(x, y) {
  var el = document.createElement("div");
  el.classList.add("placed");
  el.textContent = "🪦";
  el.style.fontSize = "32px";
  el.style.left = x + "px";
  el.style.top = y + "px";
  document.body.appendChild(el);
}

function buildHouse(x, y) {
  var el = document.createElement("div");
  el.classList.add("placed");
  el.textContent = "🏚️";
  el.style.fontSize = "60px";
  el.style.left = x + "px";
  el.style.top = y + "px";
  document.body.appendChild(el);
}

function dropStone(x, y) {
  var stones = ["💀", "🦴", "👁️", "🕯️"];
  var pick = stones[Math.floor(Math.random() * stones.length)];
  var el = document.createElement("div");
  el.classList.add("placed");
  el.textContent = pick;
  el.style.fontSize = "26px";
  el.style.left = x + "px";
  el.style.top = y + "px";
  document.body.appendChild(el);
}

function plantMushroom(x, y) {
  var el = document.createElement("div");
  el.classList.add("placed");
  el.textContent = "🍄";
  el.style.fontSize = Math.floor(Math.random() * 10) + 16 + "px";
  el.style.left = x + "px";
  el.style.top = y + "px";
  document.body.appendChild(el);
}


function rain() {
  for (var i = 0; i < 20; i++) {
    var drop = document.createElement("div");
    drop.classList.add("raindrop");
    drop.textContent = "🩸";
    drop.style.left = Math.random() * window.innerWidth + "px";
    drop.style.top = "-20px";
    document.body.appendChild(drop);
    var duration = Math.random() * 1000 + 500;
    drop.style.transition = `top ${duration}ms linear, opacity ${duration}ms`;
    setTimeout(function(d) {
      d.style.top = window.innerHeight + "px";
      d.style.opacity = "0";
    }, 10, drop);
    setTimeout(function(d) { d.remove(); }, 2000, drop);
  }
}

function sunshine() { document.body.style.backgroundColor = "hsl(45, 80%, 85%)"; }
function nightfall() { document.body.style.backgroundColor = "hsl(230, 30%, 12%)"; }
function dawn()      { document.body.style.backgroundColor = "hsl(140, 30%, 85%)"; }
function deepNight() { document.body.style.backgroundColor = "hsl(270, 40%, 6%)"; }



function growAll() {
  var items = document.querySelectorAll(".placed");
  for (var i = 0; i < items.length; i++) {
    var cur = parseFloat(items[i].style.fontSize);
    items[i].style.fontSize = cur * 1.1 + "px";
  }
}

function shrinkAll() {
  var items = document.querySelectorAll(".placed");
  for (var i = 0; i < items.length; i++) {
    var cur = parseFloat(items[i].style.fontSize);
    items[i].style.fontSize = cur * 0.9 + "px";
  }
}

function wiltAll() {
  var items = document.querySelectorAll(".placed");
  for (var i = 0; i < items.length; i++) {
    items[i].style.filter = "grayscale(1)";
    items[i].style.opacity = "0.4";
  }
}

function reviveAll() {
  var items = document.querySelectorAll(".placed");
  for (var i = 0; i < items.length; i++) {
    items[i].style.filter = "none";
    items[i].style.opacity = "1";
  }
}

function scatterAll() {
  var items = document.querySelectorAll(".placed");
  for (var i = 0; i < items.length; i++) {
    var nx = (Math.random() - 0.5) * 40;
    var ny = (Math.random() - 0.5) * 40;
    items[i].style.left = parseFloat(items[i].style.left) + nx + "px";
    items[i].style.top  = parseFloat(items[i].style.top)  + ny + "px";
  }
}

function clearAll() {
  var items = document.querySelectorAll(".placed");
  for (var i = 0; i < items.length; i++) items[i].remove();
}



var ghost = null;

function spawnGhost() {
  if (ghost) return;
  ghost = document.createElement("div");
  ghost.classList.add("ghost");
  ghost.textContent = "👻";
  ghost.style.left = "-100px";
  ghost.style.top = "-100px";
  ghost.style.opacity = "0";
  document.body.appendChild(ghost);
}

spawnGhost();



document.body.addEventListener("click", function(e) {
  placeCurrentTool(e.clientX, e.clientY);
});

document.body.addEventListener("mousemove", function(e) {
  if (ghost) {
    ghost.style.left = (e.clientX - 14) + "px";
    ghost.style.top  = (e.clientY - 28) + "px";
    ghost.style.opacity = "0.6";
    ghost.style.transition = "opacity 0.5s";
  }
  if (Math.random() < 0.01) growAll();
});

document.addEventListener("keydown", function(e) {
  if (e.key === "1") selectMushroom();
  if (e.key === "2") selectStone();
  if (e.key === "3") selectTree();
  if (e.key === "4") selectFence();
  if (e.key === "5") selectHouse();
  if (e.key === "6") selectFlower();
  if (e.key === "r" || e.key === "R") rain();
  if (e.key === "s" || e.key === "S") scatterAll();
  if (e.key === "g" || e.key === "G") growAll();
  if (e.key === "w" || e.key === "W") wiltAll();
  if (e.key === "c" || e.key === "C") clearAll();
});



setInterval(function() {
  rain();
}, 5000);

setInterval(function() {
  var items = document.querySelectorAll(".placed");
  if (items.length > 0) {
    var pick = items[Math.floor(Math.random() * items.length)];
    pick.style.transform = "scale(1.3)";
    setTimeout(function() { pick.style.transform = "scale(1)"; }, 400);
  }
  if (Math.random() < 0.3) deepNight();
  else nightfall();
}, 8000);
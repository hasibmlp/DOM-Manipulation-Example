const gameArea = document.querySelector(".game-area");

document.addEventListener("DOMContentLoaded", init);
game = {
  row: 5,
  col: 7,
  arr: [],
  ani: {},
  max: 20,
  actives: 0,
  inPlay: false,
  gameBtn: {},
};

function init() {
  gameArea.innerHtml = "";
  game.gameBtn = createNewElement(gameArea, "button", "Start", "btn");
  game.gameBtn.addEventListener("click", () => {
    if (game.gameBtn.textContent == "Start") {
      game.inPlay = true;
      game.ani = requestAnimationFrame(startGame);
      game.gameBtn.textContent = "Stop";
    } else {
      cancelAnimationFrame(game.ani);
      game.gameBtn.textContent = "Start";
      game.inPlay = false;
    }
  });
  const main = createNewElement(gameArea, "div", "", "grid-container");
  buildGrid(main);
}

function startGame() {
  const total = game.max > game.arr.lenght ? game.arr.lenght : game.max;
  if (game.actives < total) {
    game.actives++;
    makeActive(makeSelection());
  }
  if (game.inPlay) {
    game.ani = requestAnimationFrame(startGame);
  }
}
function makeSelection() {
  const sel = Math.floor(Math.random() * game.arr.length);
  return game.arr[sel];
}
function makeActive(el) {
  if (el.classList.contains("active")) {
    console.log("already exists");
    return makeActive(makeSelection());
  } else {
    el.classList.add("active");
    const timer = Math.floor(Math.random() * 4000) + 5000;
    setTimeout(removeActives, timer, el);
    return true;
  }
}

function removeActives(myEle) {
  console.log(myEle);
  myEle.classList.remove("active");
  game.actives--;
}

function buildGrid(main) {
  const dim = { x: "", y: "" };
  for (let y = 0; y < game.row; y++) {
    dim.y += " auto ";
    for (let x = 0; x < game.col; x++) {
      if (y == 0) {
        dim.x += " auto ";
      }
      const cell = y * game.col + x + 1;
      const ele = createNewElement(main, "div", cell, "grid-item");
      ele.addEventListener("click", hitButton);
      game.arr.push(ele);
    }
  }
  main.style.gridTemplateColumns = dim.x;
  main.style.gridTemplateRows = dim.y;

  function hitButton(e) {
    el = e.target;
    if (el.classList.contains("active")) {
      console.log("hit");
      removeActives(el);
    } else {
      console.log("miss");
    }
  }
}
function createNewElement(parent, ele, html, myClass) {
  const el = document.createElement(ele);
  el.classList.add(myClass);
  el.innerHTML = html;
  parent.append(el);
  return el;
}

const gameArea = document.querySelector(".game-area");

document.addEventListener("DOMContentLoaded", init);
game = {
  row: 10,
  col: 20,
  arr: [],
  ani: {},
  max: 2,
  actives: 0,
  inPlay: false,
  gameBtn: {},
  hit: 0,
  miss: 0,
  dif: 3,
};

function init() {
  game.max = 7 - game.dif;
  gameArea.innerHtml = "";
  const temp = `Score ${game.hit} Miss ${game.miss}`;
  game.scoreBoard = createNewElement(gameArea, "div", temp, "score-board");
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
  const temp = Math.floor(Math.random() * 103);
  if (game.actives < total && temp > 50 + game.dif * 10) {
    game.actives++;
    makeActive(makeSelection());
  }
  if (game.inPlay) {
    game.arr.forEach((el) => {
      if (el.counter > 0) {
        el.counter--;
        // el.textContent = el.counter;
        let temp = Math.ceil(Number(el.counter) / 10) / 10;
        el.style.opacity = temp;
        if (el.counter <= 0) {
          removeActives(el);
          game.miss++;
          updateScore();
        }
      }
    });

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
    el.counter = Math.floor(Math.random() * 100) + 75 + game.dif * 25;
    // setTimeout(removeActives, timer, el);
    return true;
  }
}

function removeActives(myEle) {
  myEle.counter = 0;
  myEle.textContent = "-";
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
      const ele = createNewElement(main, "div", "-", "grid-item");
      ele.counter = 0;
      ele.addEventListener("click", hitButton);
      game.arr.push(ele);
    }
  }
  main.style.gridTemplateColumns = dim.x;
  main.style.gridTemplateRows = dim.y;

  function hitButton(e) {
    el = e.target;
    if (el.classList.contains("active")) {
      game.hit++;
      console.log("hit");
      updateScore();
      removeActives(el);
    } else {
      game.miss++;
      updateScore();
      console.log("miss");
    }
  }
}
function updateScore() {
  const temp = `Score ${game.hit} Miss ${game.miss}`;
  game.scoreBoard.textContent = temp;
}
function createNewElement(parent, ele, html, myClass) {
  const el = document.createElement(ele);
  el.classList.add(myClass);
  el.innerHTML = html;
  parent.append(el);
  return el;
}

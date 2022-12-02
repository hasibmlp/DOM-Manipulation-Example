const main = document.querySelector("#main");

const el1 = document.createElement("div");
const el2 = document.createElement("h1");
el2.textContent = "Heloo There..";

el1.append(el2);
main.append(el1);

el2.style.backgroundColor = "red";

for (let i = 0; i < 20; i++) {
  const img = document.createElement("img");
  const myImg = `https://dummyimage.com/100x100" +
  "/${colorRandom()}/${colorRandom()}&text=New Img ${i + 1}`;
  img.setAttribute("src", myImg);
  img.classList.add("blue");

  if (i % 3 == 0) {
    img.classList.add("red");
    img.classList.remove("blue");
  }

  main.append(img);
}

function colorRandom() {
  return Math.random().toString(16).substr(2, 6);
}

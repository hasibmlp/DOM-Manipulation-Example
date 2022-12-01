const main = document.querySelector("#main");
main.innerHTML += " ";
// for (let i = 0; i <= 10; i++) {
//   main.innerHTML += `<a href=# >Click Me ${i + 1} </a><br>`;
// }
// https://dummyimage.com/200x300/ffffff/0000000&text=dummyimage.com+rocks!
const lops = document.querySelectorAll('a[href="#"]');

// lops.forEach((lop, index) => {
//   if (index % 3 == 0) {
//     lop.classList.add("red");
//   }
//   if (index % 2 == 0) {
//     lop.classList.add("transform");
//   }
// });

for (let i = 0; i < 30; i++) {
  main.innerHTML += `<img>`;
}
const myImg = document.querySelectorAll("img");
console.log(myImg);
myImg.forEach((lop, index) => {
  if (!lop.getAttribute("src")) {
    const img = `https://dummyimage.com/100x100" +
      "/${colorRandom()}/${colorRandom()}&text=New Img ${index + 1}`;
    lop.setAttribute("src", img);
  }
});
function colorRandom() {
  return Math.random().toString(16).substr(2, 6);
}

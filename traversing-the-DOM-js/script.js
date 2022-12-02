const main = document.querySelector("#main");
const uList = document.querySelector("ul");

for (let i = 0; i < 10; i++) {
  const uli = document.createElement("li");
  uli.textContent = `${i + 4}`;
  uList.append(uli);
}

// uList.childNodes.forEach((item) => {
//   console.log(item);
// });

for (let i = 0; i < uList.children.length; i++) {
  const el = uList.children[i];
  const prev = el.previousElementSibling;
  if (prev != null) {
    console.dir(el.parentElement);
    prev.style.color = "red";
    prev.textContent += `parent: ${el.parentElement.tagName} parentNode = ${el.parentElement}`;
  }
}

for (let i = 0; i < uList.children.lenght; i++) {
  console.log(uList.childern[i]);
  //   const el = uList.childern[i];
  //   console.log(el.previousElementSibling);
  //   const prev = el.previousElementSibling;
  //   prev.style.color = "red";
}

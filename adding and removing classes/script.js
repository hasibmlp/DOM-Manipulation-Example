const myClass = document.querySelector(".myClass");
btn = document.querySelector("button");
myLinks = document.querySelectorAll("a");

// myClass.classList.add("red");
// myClass.classList.toggle("myClass");
// myClass.classList.remove("red");
// myClass.classList.toggle("blue");

console.log(myClass.getAttribute("class"));
myClass.setAttribute("class", "red transform");
console.log(btn.getAttribute("disabled"));
btn.setAttribute("disabled", true);
console.log(myLinks);

myLinks.forEach((myLink) => {
  if (myLink.classList.contains("red")) {
    myLink.textContent = myLink.textContent + " RED";
  }
  myLink.innerHTML += "<br>";
  myLink.setAttribute("target", "_blank");
});
myClass.id = "myId";
console.log(myClass.id);

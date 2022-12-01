myClass = document.querySelector(".myClass");
myId = document.querySelector("#myId");
myDiv = document.querySelector("div");

myDiv.textContent = "hello world";

const eles = document.querySelectorAll(".myClass");
eles.forEach((ele, index) => {
  console.log(ele.textContent);
  ele.textContent = `hello world.....${index + 1}`;
});

myClass = document.querySelector(".myClass");
myId = document.querySelector("#myId");
myDiv = document.querySelector("div");

console.log(myId.textContent);
const html = " <h1> hello world</h1>";
myId.innerHTML = html;

myId.style.color = "black";
myId.style.backgroundColor = "red";
myId.style.border = "1px solid yellow";
myId.style.borderRadius = "20%";

st = myId.style;

st.width = "50%px";
st.textAlign = "center";
st.textTransform = "upperCase";
st.margin = "25px";

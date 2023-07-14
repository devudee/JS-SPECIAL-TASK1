const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
dark.addEventListener("click", fun);
light.addEventListener("click", fun2);
function fun() {
  document.body.classList.toggle("dark");
}
function fun2() {
  document.body.classList.toggle("light");
}

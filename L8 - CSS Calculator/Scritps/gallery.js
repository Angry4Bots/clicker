const container = document.querySelector(".shop__content--image");
let listimg = JSON.parse(localStorage.getItem('list')) || []
let lenght = listimg.length
console.log(listimg)
console.log(lenght)
const obrazki = () => {
  if (lenght > 0){
    for (let i = 0; i < lenght; i++) {
      const listItem = document.createElement("img");
      console.log(listimg[i])
      listItem.setAttribute('src',listimg[i])
      container.appendChild(listItem);
    }}
  else{

    const listItem = document.createElement("p");
    listItem.textContent = "Nie masz obrazków :("
    container.appendChild(listItem);
  }}
document.addEventListener("DOMContentLoaded", () => {
  obrazki();
});
const display = document.querySelector("#bobux-display");
const button = document.querySelector(".bobux__button");
button.addEventListener("click", () => {
  const value = parseInt(localStorage.getItem('value')) || parseInt(button.getAttribute("data-value")); 
  const bobux = parseInt(localStorage.getItem('dane'));
  display.value = display.value + "+" + value;
  display.value = eval(display.value)

  console.log("bobuxy zostały dodane")
  localStorage.setItem('dane',bobux + value)
  wyswietl_dane()
  if (localStorage.getItem('value') == null){
    localStorage.setItem('value', value)
  }
});
const wyswietl_dane = () => {
  const bobux = localStorage.getItem('dane');
  const output = document.getElementById('output');
  if (bobux) {
    output.textContent = `${bobux}`;
  } else {
    output.textContent = `0`;
  }
};
document.addEventListener("DOMContentLoaded", () => {
  wyswietl_dane();
});
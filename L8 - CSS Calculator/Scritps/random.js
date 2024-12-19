const div = document.querySelector('.div')
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
const random1 = () => {
  let output1 = document.querySelector("#output1")
  if (output1.value > 100){
    output1 = 100
    document.querySelector("#output1").value = output1
    output1.disabled = true
    localStorage.setItem('random',output1.value)
  }
  if (output1.value <= 1){
    output1.value = 2
    localStorage.setItem('random',output1.value)
    output1.disabled = true
  }
  else{
    localStorage.setItem('random',output1.value)
    output1.disabled = true
  }
}
const random2 = () => {
  let output1 = document.querySelector("#output1")
  const button2 = document.getElementById("2")
  let bobux = localStorage.getItem('dane') || 0
  let output2 = document.querySelector("#output2")
  const maxvalue = localStorage.getItem('random')
  const number = parseInt(output2.value)
  let output3 = document.querySelector("#output3")
  console.log(number)
  console.log(bobux)
  if(number > bobux){
    console.log("chuj ci w dupe")
  }
  if (number > bobux || number == 0){
    button2.textContent = "nie masz pieniędzy"
    button2.classList.add("change")
    setTimeout(() => {
      button2.classList.remove("change");
      button2.textContent = "Potwierdź";
    }, 500);
  }
  if(output1.disabled == false){
    button2.textContent = "pierwsza luka"
    button2.classList.add("change")
    setTimeout(() => {
      button2.classList.remove("change");
      button2.textContent = "Potwierdź";
    }, 500);
  }
  else{
    output3.disabled = false
    output3.setAttribute('max',maxvalue)
    output2.disabled = true
    localStorage.setItem('losevalue',number)
    console.log(localStorage.getItem('losevalue'))
    localStorage.setItem('winvalue',(Math.round(number*localStorage.getItem('random')/5)+1))
    console.log(localStorage.getItem('winvalue'))
  }
}
const random3 = () => {
  const button3 = document.getElementById("3")
  let output1 = document.querySelector("#output1")
  let output2 = document.querySelector("#output2")
  let bobux = parseInt(localStorage.getItem('dane')) || 0
  const wygrana = document.querySelector(".wygrana")
  const maxvalue = localStorage.getItem('random')
  const winvalue = parseInt(localStorage.getItem('winvalue'))
  const losevalue = parseInt(localStorage.getItem('losevalue'))
  const number = Math.floor(Math.random()*maxvalue)+1
  let output3 = document.querySelector("#output3")
  if (output3.disabled == true && output1.disabled == false || output2.disabled == false){
    button3.textContent = "nie możesz tego zrobić"
    button3.classList.add("change")
    setTimeout(() => {
      button3.classList.remove("change");
      button3.textContent = "Potwierdź";
    }, 500);
    output3.disabled = true
    return
  }
  if(output3.value == 0){
    output3.value = 1
  }
  if(Math.round(output3.value) == number){
    wygrana.textContent = "Udało ci się, zgadłeś"
    console.log(localStorage.getItem('winvalue'))
    bobux += winvalue
    localStorage.setItem('dane',bobux)
  }
  else{
    wygrana.textContent = "Nie udało ci się"
    bobux -= losevalue
    localStorage.setItem('dane',bobux)
  }
}
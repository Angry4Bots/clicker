const div = document.querySelector('.div')
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
const divc = async() => {
  const button = document.querySelector(".myButton")
  const wygrana = document.querySelector(".wygrana")
  let bobux = parseInt(localStorage.getItem('dane')) || 0
  let output1 = parseInt(document.querySelector("#output1").value) || 0
  console.log(output1)
  let output2 = parseInt(document.querySelector("#output2").value) || 0
  console.log(output2)
  let output3 = parseInt(document.querySelector("#output3").value) || 0
  console.log(output3)
  console.log(output1+output2+output3)
  output1 = Math.round(output1)
  output2 = Math.round(output2)
  output3 = Math.round(output3)
  document.querySelector("#output1").value = output1;
  document.querySelector("#output2").value = output2;
  document.querySelector("#output3").value = output3;
  if ((output1+output2+output3)>bobux){
    button.textContent = "Nie masz pieniędzy"
    button.classList.add("changed")
    button.disabled = true
    setTimeout(() => {
      button.classList.remove("changed");
      button.textContent = "Gambluj";
      button.disabled = false
    }, 500);
    return
  }
  if ((output1+output2+output3)== 0){
    button.textContent = "No money"
    button.classList.add("changed")
    button.disabled = true
    setTimeout(() => {
      button.classList.remove("changed");
      button.textContent = "Gambluj";
      button.disabled = false
    }, 500);
    return
  }
  for (let i = 1; i < 20; i++) {
    div.classList.remove("changed");
    div.classList.remove("changed2");
    div.classList.remove("changed3");
    const numberone = Math.floor(Math.random()*3) + 1
    if (numberone == 1){
      div.classList.add("changed3");
      console.log("zielony")
    }
    if (numberone == 2){
      div.classList.add("changed");
      console.log("czarny")
    }
    if (numberone ==3){
      div.classList.add("changed2");
      console.log("czerwony")
    }
    await sleep(30 * i)
  }
  const number = Math.floor(Math.random()*19) + 1
  if (number == 1){
    div.classList.remove("changed");
    div.classList.remove("changed2");
    div.classList.add("changed3");
    wygrana.textContent = "Zielony wygrał"
    bobux -= output1+output2
    output1 = 0
    output2 = 0
    output3 = output3*5
    bobux += output3
    setTimeout(() => {
      wygrana.textContent = "W tym miejscu dowiesz się jaki kolor wygrał";
    }, 1000);
  }
  if (number >1 && number <= 10){
    div.classList.remove("changed3");
    div.classList.remove("changed2");
    div.classList.add("changed");
    wygrana.textContent = "Czarny wygrał"
    bobux -= output3+output2
    output2 = 0
    output3 = 0
    output1 = output1*2
    bobux += output1
    setTimeout(() => {
      wygrana.textContent = "W tym miejscu dowiesz się jaki kolor wygrał";
    }, 1000);
  }
  if (number >10 && number <= 19){
    div.classList.remove("changed3");
    div.classList.remove("changed");
    div.classList.add("changed2");
    wygrana.textContent = "Czerwony wygrał"
    setTimeout(() => {
      wygrana.textContent = "W tym miejscu dowiesz się jaki kolor wygrał";
    }, 1000);
    bobux -= output3+output2
    output1 = 0
    output3 = 0
    output2 = output2*2
    bobux += output2
  }
  localStorage.setItem('dane',bobux)
  document.querySelector("#output1").value = output1;
  document.querySelector("#output2").value = output2;
  document.querySelector("#output3").value = output3;
}
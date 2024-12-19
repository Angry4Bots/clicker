const buttons = document.querySelectorAll(".myButton");

buttons.forEach((button) => {
  const id = button.getAttribute("data-id");
  let amount = localStorage.getItem(`amount${id}`) || button.getAttribute('amount');
  const sprawdzenie_ilosci = () => {
    if (parseInt(amount) <= 0) {
      button.disabled = true;
      button.textContent = "Sprzedane";
      button.classList.add("changed");
    }
  };

  const wyswietl_ilosc = () => {
    const amountDisplay = document.querySelector(`#amountDisplay${id}`);
    amountDisplay.textContent = `Ilość: ${amount}`;
  };

  wyswietl_ilosc();
  sprawdzenie_ilosci()

  button.addEventListener("click", () => {
    const addon = parseInt(button.getAttribute("adding-value"));
    const price = parseInt(button.getAttribute('price'));
    const second = parseInt(button.getAttribute('second'))
    const img = document.querySelector(`.image${id}`)
    console.log(img)
    let src = img.src
    let listimg = JSON.parse(localStorage.getItem('list')) || []
    console.log(listimg)
    let prs = parseInt(localStorage.getItem('seconds')) || 0
    let bobux = parseInt(localStorage.getItem('dane'));
    let value = parseInt(localStorage.getItem('value'));

    if (bobux >= price && amount>0) {
      bobux -= price;
      value += addon;
      amount -= 1;
      prs += second
      listimg.push(src)
      localStorage.setItem('list',JSON.stringify(listimg))
      console.log(localStorage.getItem(`list`))
      localStorage.setItem('seconds',prs)
      localStorage.setItem(`amount${id}`, amount);
      button.textContent = "Kupiono";
      button.classList.add("changed");
      localStorage.setItem('dane', bobux);
      localStorage.setItem('value', value);
      if (parseInt(amount) > 0){
        setTimeout(() => {
          button.classList.remove("changed");
          button.textContent = "Kup";
        }, 500);
      }
      wyswietl_dane();
      sprawdzenie_ilosci()

    } if(bobux < price && amount > 0) {
      button.classList.add("changed");
      button.textContent = "Nuh uh";
      setTimeout(() => {
        button.classList.remove("changed");
        button.textContent = "Kup";
      }, 500);
    }
    else{
      sprawdzenie_ilosci()
    }
    sprawdzenie_ilosci();
    wyswietl_ilosc();
  })
  sprawdzenie_ilosci()
});
const wyswietl_dane = () => {
    let bobux = parseInt(localStorage.getItem('dane')) || 0;
    const output = document.getElementById('output');
    const second = parseInt(localStorage.getItem(`seconds`)) || 0
    bobux += second
    localStorage.setItem('dane',bobux)
    if (bobux) {
      output.textContent = `${bobux}`;
    } else {
      output.textContent = `0`;
    }
  };
document.addEventListener("DOMContentLoaded", () => {
    wyswietl_dane();
});
setInterval(() => {
    wyswietl_dane()
  }, 1000);
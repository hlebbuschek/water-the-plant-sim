const flower = document.getElementById('flower-img');
const can = document.getElementById('can');
let counter = 1;
let flowerTimeout = null;
let modalTimeout = null;

document.querySelector('.can').addEventListener('click', () => {
  // Zähler erhöhen und zurücksetzen bei >5
  if (counter < 5) {
    counter++;
    can.classList.remove('rotate'); // für mehrfaches Triggern
    void can.offsetWidth; // Trick, um Reflow zu erzwingen
    can.classList.add('rotate');
  // Blume aktualisieren
    clearTimeout(flowerTimeout);
      flowerTimeout = setTimeout(() => {
        flower.src = `img/flower-${counter}.png`;
      }, 1000);
    // Gießkanne rotieren
    if (counter === 5) {
      clearTimeout(modalTimeout);
      modalTimeout = setTimeout(() => {
        document.querySelector('.modal').classList.remove('unvisible'); 
      }, 3000);
    }
  }
});

document.querySelector('.replay')
  .addEventListener('click', () => {
    clearTimeout(flowerTimeout);
    clearTimeout(modalTimeout);

    setTimeout(() => {
      counter = 1;
      flower.src = `img/flower-1.png`;
      document.querySelector('.modal').classList.add('unvisible');
    }, 1000);
  });
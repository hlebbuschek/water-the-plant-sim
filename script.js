// flower = document.getElementsByClassName('plant');
// // flowersImage = document.createElement('img');
// // flowersImage.src = "img/flower-1.png";
// // flower.appendChild(flowersImage);
// flower.innerHTML = `<img src="img/flower-1.png" alt="🌷">`;
// console.log(flower);
// counter = 1;
// document.getElementById('water').
//   addEventListener('click', () => {
//     counter ++;
//     if (counter > 5) {
//       counter = 1;
//     }
//     // growingUp(counter);
//     flower.innerHTML = `<img src="img/flower-${counter}.png" alt="🌷">`;
//     // for (let i = 2; i < 6; i++) {
//     //   myVar = setTimeout(growingUp(i), 5000);
//     //   clearTimeout(myVar);
//     // }
//   });
// function growingUp(id) {
//   console.log(id);
//   flower.innerHTML = `<img src="img/flower-${id}.png" alt="🌷">`;
// }

const flower = document.getElementById('plant');
const can = document.getElementById('can');
let counter = 1;

document.getElementById('water').addEventListener('click', () => {
  // Zähler erhöhen und zurücksetzen bei >5
  counter++;
  if (counter > 5) counter = 1;

  // Blume aktualisieren
  flower.innerHTML = `<img src="img/flower-${counter}.png" alt="🌷">`;

  // Gießkanne rotieren
  can.classList.remove('rotate'); // für mehrfaches Triggern
  void can.offsetWidth; // Trick, um Reflow zu erzwingen
  can.classList.add('rotate');
});

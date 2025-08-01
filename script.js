

const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// Posición inicial
function setInitialPositions() {
  const cardWidth = card1.offsetWidth;
  const screenWidth = window.innerWidth;
  const offset = Math.min(420, screenWidth * 0.4); // Ajuste responsivo para el desplazamiento
  
  card1.style.transform = 'translate(-50%, -50%) rotateY(0deg)';
  card1.style.left = '50%';
  card1.style.zIndex = '2';
  
  card2.style.transform = `translate(calc(-50% + ${offset}px), -50%) rotateY(-50deg)`;
  card2.style.left = '50%';
  card2.style.zIndex = '1';
}

btnRight.addEventListener('click', () => {
  const cardWidth = card1.offsetWidth;
  const screenWidth = window.innerWidth;
  const offset = Math.min(420, screenWidth * 0.4);
  
  card1.style.transform = `translate(calc(-50% - ${offset}px), -50%) rotateY(50deg)`;
  card1.style.left = '50%';
  card1.style.zIndex = '1';
  
  card2.style.transform = 'translate(-50%, -50%) rotateY(0deg)';
  card2.style.left = '50%';
  card2.style.zIndex = '2';
});

btnLeft.addEventListener('click', () => {
  setInitialPositions();
});

// Inicializar y ajustar en redimensionamiento
setInitialPositions();
window.addEventListener('resize', setInitialPositions);
















// const card1 = document.getElementById('card1');
// const card2 = document.getElementById('card2');
// const btnLeft = document.getElementById('btnLeft');
// const btnRight = document.getElementById('btnRight');

// // Posición inicial: card1 al centro y plana, card2 a la derecha e inclinada
// card1.style.transform = 'rotateY(0deg)';
// card1.style.left = '0px';
// card2.style.transform = 'rotateY(-50deg)';
// card2.style.left = '420px';

// btnRight.addEventListener('click', () => {
//   card1.style.transform = 'rotateY(50deg)';
//   card1.style.left = '-420px';

//   card2.style.transform = 'rotateY(0deg)';
//   card2.style.left = '0px';
// });

// btnLeft.addEventListener('click', () => {
//   card1.style.transform = 'rotateY(0deg)';
//   card1.style.left = '0px';

//   card2.style.transform = 'rotateY(-50deg)';
//   card2.style.left = '420px';
// });


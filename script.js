const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// Posición inicial: card1 al centro y plana, card2 a la derecha e inclinada
card1.style.transform = 'rotateY(0deg)';
card1.style.left = '0px';
card2.style.transform = 'rotateY(-50deg)';
card2.style.left = '420px';

btnRight.addEventListener('click', () => {
  card1.style.transform = 'rotateY(50deg)';
  card1.style.left = '-420px';

  card2.style.transform = 'rotateY(0deg)';
  card2.style.left = '0px';
});

btnLeft.addEventListener('click', () => {
  card1.style.transform = 'rotateY(0deg)';
  card1.style.left = '0px';

  card2.style.transform = 'rotateY(-50deg)';
  card2.style.left = '420px';
});


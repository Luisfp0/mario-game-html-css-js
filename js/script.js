const jump = () => {
  const mario = document.querySelector('.mario');
  mario.classList.add('jump');
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 700);
}

const loop = setInterval(() => {
  const mario = document.querySelector('.mario');
  const pype = document.querySelector('.pype');
  let pypePosition = pype.offsetLeft
  if (pypePosition < 470 && pypePosition > 450) {
    if (mario.classList.contains('jump')) {
      return
    } else {
      pype.style.animation = 'none';
      pype.classList.add('pype-left');
    }
  }
}, 50)

document.addEventListener('keydown', jump); a
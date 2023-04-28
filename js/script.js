const jump = () => {
  const mario = document.querySelector('.mario');
  mario.classList.add('jump');
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 600);
}

const loop = setInterval(() => {
  const mario = document.querySelector('.mario');
  const pype = document.querySelector('.pype');
  let pypePosition = pype.offsetLeft
  console.log(pypePosition)
  if (pypePosition < 450 && pypePosition > 340) {
    if (mario.classList.contains('jump')) {
      return
    } else {
      pype.style.animation = 'none';
      pype.classList.add('pype-left');
      mario.src = './images/wasted.png'
    }
  }
}, 50)

document.addEventListener('keydown', jump); a
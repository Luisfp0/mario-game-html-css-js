const jump = () => {
  const mario = document.querySelector('.mario');
  mario.classList.add('jump');
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 700);
}

document.addEventListener('keydown', jump); a
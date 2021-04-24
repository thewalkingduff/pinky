let leftEye = document.getElementsByClassName('left-eye')
let rightEye = document.getElementsByClassName('right-eye');
const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};

function eyeDropper() {
  document.body.classList.toggle('medicine')
}

function handTouch() {
  document.body.classList.toggle('grab')
}

function checkIfRightPink() {
  if (!rightEye.white) { eyeDropper() } else {
    handTouch()
  }
}

function checkIfLeftPink() {
  if (!leftEye.white) { eyeDropper() } else {
    handTouch()
  }
}

function leftPinkToWhite() {
  for (let i = 0; i < 2; i++) {
    document.getElementsByClassName('left-eye')[i].classList.toggle('white')
  }
}

function rightPinkToWhite() {
  for (let i = 0; i < 2; i++) {
    rightEye[i].classList.toggle('white')
    // if (true) { eyeDropper() }
  }
}

for (let i = 0; i < 10; i++) {
  let leftEye = document.getElementsByClassName('left-eye')
  let rightEye = document.getElementsByClassName('right-eye');
  leftEye[i].addEventListener('click', leftPinkToWhite);
  rightEye[i].addEventListener('click', rightPinkToWhite,);
  rightEye[i].addEventListener('mouseover', checkIfRightPink)
  leftEye[i].addEventListener('mouseover', checkIfLeftPink)
}






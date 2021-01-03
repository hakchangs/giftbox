const box = document.querySelector(".box")
const face1 = document.querySelector(".face-1")
let pid

box.addEventListener("click", (event) => {
  box.classList.toggle("opened")
  const isOpened = box.classList.contains("opened")
  face1.style.transform = `rotateX(${isOpened ? 330 : 90}deg)`
  const timeout = isOpened ? 1000 * 1 : 10
  setTimeout(upParticles, timeout, isOpened)
})

function upParticles(up) {
  if (!up) {
    if (pid) clearInterval(pid)
    return
  }
  pid = setInterval(
    () => {
      for (let i = 0; i < n; i++) {
        const x = i % 2 ? 5 : -5
        const y = 50
        randomShoot(x, y)
      }
    },
    1000 * 0.8,
    (n = 100)
  )
}

function randomShoot(x = 10, y = 50) {
  let vx = Math.floor(Math.random() * x)
  let vy = Math.floor(Math.random() * y) * -1
  shootBall(vx, vy)
}

/**
 * 볼을 만들어 쏜다. (포물선 운동)
 * @param {Number} vx 초기속력 x
 * @param {Number} vy 초기속력 y
 * @param {Number} g 중력가속도
 */
function shootBall(vx = 5, vy = -10, g = 1) {
  //새로운 볼을 만든다.
  const mother = box
  const ball = document.createElement("div")
  ball.className = "ball"
  ball.style.background = randomColor()
  mother.appendChild(ball)
  //현재위치 기억
  let posX = 0
  let posY = 0

  //포물선 운동 시작
  requestAnimationFrame(frame)
  function frame() {
    vy = vy + g
    posX = posX + vx
    posY = posY + vy
    ball.style.transform = `translate(${posX}px, ${posY}px)`
    if (posY < 50) requestAnimationFrame(frame)
    else mother.removeChild(ball)
  }
}

function randomColor() {
  const number = Math.floor(Math.random() * 4)
  let color = "violet"
  switch (number) {
    case 1:
      color = "violet"
      break
    case 2:
      color = "gold"
      break
    case 3:
      color = "silver"
      break
    case 4:
      color = "tomato"
      break
  }
  return color
}

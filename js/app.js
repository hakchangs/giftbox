const box = document.querySelector(".box")
const face1 = document.querySelector(".face-1")
const particles = document.querySelector(".particles")

box.addEventListener("click", (event) => {
  box.classList.toggle("opened")
  const isOpened = box.classList.contains("opened")
  face1.style.transform = `rotateX(${isOpened ? 330 : 90}deg)`
  const timeout = isOpened ? 1000 * 1 : 10
  setTimeout(upParticles, timeout, isOpened)
})
function upParticles(up) {
  particles.classList.toggle("up", up)
}

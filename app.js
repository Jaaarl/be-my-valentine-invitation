const music = document.querySelector("#music")
const btnNo = document.querySelector("#btnNo")
const btnYes = document.querySelector("#btnYes")
const img1 = document.querySelector("#img1")
const msg = document.querySelector("#message")
btnNo.addEventListener('click', () => {
    music.play();
    img1.src = "img/rain.gif"
    img1.className = img1.className + "m-5"
    msg.textContent = "ok po understandable have a good day"
    btnYes.remove()
    btnNo.remove()
});
btnYes.addEventListener('click', () => {
    btnYes.disabled = true;
})

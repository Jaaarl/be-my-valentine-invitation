const music = document.querySelector("#music")
const btnNo = document.querySelector("#btnNo")
const btnYes = document.querySelector("#btnYes")
const img1 = document.querySelector("#img1")
btnNo.addEventListener('click', () => {
    music.play();
    img1.src = "img/rain.gif"
});
btnYes.addEventListener('click', () => {
    btnYes.disabled = true;
})

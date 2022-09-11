const helloWorld = document.querySelector("#hello");
const goodbyeBtn = document.querySelector("#goodbye");

goodbyeBtn.addEventListener("click", () => {
    helloWorld.innerHTML = "Goodbye World!"
})

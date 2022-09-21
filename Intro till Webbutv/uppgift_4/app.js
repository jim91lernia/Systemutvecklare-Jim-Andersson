document.querySelector("#buttonNewToDo").addEventListener("click", () => {
    let desc = document.querySelector("#txtToDo")
    let title = document.querySelector("#titleToDo")
    if (title.value != "" && desc.value != "") {
        addChild(title.value, desc.value)
    }
    input.value("")
})

document.querySelector("#buttonClearAll").addEventListener("click", () => {
    let ul = document.querySelector("#list")
    if (ul.hasChildNodes()) {
        let child = ul.lastElementChild
        while (child) {
            ul.removeChild(child)
            child = ul.lastElementChild
        }
    }

})


function addChild(title, desc) {
    let ul = document.querySelector("#list")
    let li = document.createElement("li")
    li.innerHTML = `
    <article class="message is-info">
    <div class="message-header">
      <p>${title}</p>
      <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
      ${desc}
    </div>
  </article>
  <br>
    `
    ul.appendChild(li);
}
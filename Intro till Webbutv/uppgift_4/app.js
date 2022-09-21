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
    <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>${title}</strong>
          <br>
          ${desc}
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
    `
    ul.appendChild(li);
}
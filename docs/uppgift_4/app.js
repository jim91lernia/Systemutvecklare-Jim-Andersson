const array = []
const list = document.querySelector("#list")
const listItems = document.querySelectorAll("#list li")
const finished = document.querySelector("#finished")
const remaining = document.querySelector("#remaining")
const total = document.querySelector("#total")

finished.textContent = 0
remaining.textContent = 0
total.textContent = 0


document.querySelector("#buttonNewToDo").addEventListener("click", () => {
  let desc = document.querySelector("#txtToDo").value
  let title = document.querySelector("#titleToDo").value
  if (title != "" && desc != "") {
    addChild(title, desc)
  } else {
    alert("Kontrollera så att du har fyllt i titel och beskrivning på punkt.")
  }
  title.value = ""
  desc.value = ""
  update()
})

document.querySelector("#buttonClearAll").addEventListener("click", () => {

  if (list.hasChildNodes()) {
    let child = list.lastElementChild
    while (child) {
      list.removeChild(child)
      child = list.lastElementChild
    }
  }

  update()

})

function addChild(title, desc) {
  let li = document.createElement("li")
  let isChecked = false
  li.innerHTML = `
      <article class="message is-warning">
        <div class="message-header">
          ${title}
        </div>
        <div class="message-body">
          ${desc}
        </div>

      <div class="field is-grouped">
          <p class="control">
            <button class="button is-success is-small" id="checkButton" name="check">Genomför</button>
          </p>
          <p class="control">
            <button class="button is-danger is-small" id="deleteButton" name="delete">Ta bort</button>
          </p>
        </div>
      </article>
      <br>
    `
  list.appendChild(li)
  array.push({
    title,
    desc,
    isChecked
  })
  update()
}

function getDomIndex(target) {
  return [].slice.call(target.parentNode.children).indexOf(target)
}

function update() {

  let fin = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i].isChecked) {
      fin += 1
    }
  }


  finished.textContent = fin
  remaining.textContent = array.length - fin
  total.textContent = array.length

}


list.addEventListener("click", (e) => {
  let currentListItem = e.target.closest("li")
  let itemArticle = currentListItem.querySelector("article")
  let check = currentListItem.querySelector("#checkButton")
  let currentIndex = getDomIndex(currentListItem)


  if (currentListItem) {
    if (e.target.id == "checkButton") {

      if (array[currentIndex].isChecked) {
        array[currentIndex].isChecked = false
        itemArticle.classList.replace("is-success", "is-warning")
        check.textContent = "Genomför"

      } else {
        array[currentIndex].isChecked = true
        itemArticle.classList.replace("is-warning", "is-success")
        check.textContent = "Avklarad"

      }
    }

    if (e.target.id == "deleteButton") {
      list.removeChild(currentListItem)
      array.splice(currentIndex, 1)
    }
  }

  update()

})
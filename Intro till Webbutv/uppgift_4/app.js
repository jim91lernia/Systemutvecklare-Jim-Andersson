const array = []
const list = document.querySelector("#list")
const listItems = document.querySelectorAll("#list li")



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
})

document.querySelector("#buttonClearAll").addEventListener("click", () => {

  if (list.hasChildNodes()) {
    let child = list.lastElementChild
    while (child) {
      list.removeChild(child)
      child = list.lastElementChild
    }
  }

})

function addChild(title, desc) {
  let li = document.createElement("li")
  let isChecked = false
  li.innerHTML = `
      <article class="message is-info">
        <div class="message-header">
          ${title}
        </div>
        <div class="message-body">
          ${desc}
        </div>
        <div>
          <button class="button" id="checkButton" name="check">Check</button>
          <button class="delete" id="deleteButton" name="delete">Delete</button>
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
}

function getDomIndex(target) {
  return [].slice.call(target.parentNode.children).indexOf(target)
}



list.addEventListener("click", (e) => {
  let currentListItem = e.target.closest("li")
  let headerText = currentListItem.querySelector(".message-header")
  let itemText = currentListItem.querySelector(".message-body")
  let currentIndex = getDomIndex(currentListItem)

  if (currentListItem) {
    if (e.target.id == "checkButton") {

      if (array[currentIndex].isChecked) {
        headerText.classList.add("is-not-finished")
        array[currentIndex].isChecked = false
      } else {
        headerText.classList.add("is-finished")
        array[currentIndex].isChecked = true
      }

      console.log(array)
    }

    if (e.target.id == "deleteButton") {
      list.removeChild(currentListItem)
      array.splice(currentIndex, 1)

      console.log(array)
    }
  }
})
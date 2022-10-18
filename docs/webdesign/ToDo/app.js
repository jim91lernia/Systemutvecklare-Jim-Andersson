const array = []
const list = document.querySelector(".list")
const listItems = document.querySelectorAll(".list li")
const finished = document.querySelector(".finished")
const warning = document.querySelector(".warning")
finished.textContent = 0

document.querySelector("#ToDo").addEventListener("click", () => {
  let item = document.querySelector("#itemToDo").value
  if (item != "") {
    warning.classList.remove("animate-warning")
    addChild(item)
  } else {
    warning.classList.toggle("animate-warning")
  }
  item.value = ""
  update()
})

list.addEventListener("click", (e) => {
  let currentListItem = e.target.closest("li")
  let currentParagraph = e.target.closest("div > p")
  let currentIndex = getDomIndex(currentListItem)
  if (currentListItem) {
    if (e.target.tagName == "P") {
      if (array[currentIndex].isChecked) {
        array[currentIndex].isChecked = false
        currentParagraph.classList.remove("item-finished")
      } else {
        array[currentIndex].isChecked = true
        currentParagraph.classList.add("item-finished")
      }
    }
    if (e.target.id == "deleteButton") {
      list.removeChild(currentListItem)
      array.splice(currentIndex, 1)
    }

  }


  update()

})


function addChild(item) {
  let li = document.createElement("li")
  let isChecked = false
  li.innerHTML = `
        <div class="item item-list animate-fade-in-item">
          <p>${item}</p>
          <button id="deleteButton" name="delete">Ta bort</button>
        </div>
 
    `
  list.appendChild(li)
  array.push({
    title: item,
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

}
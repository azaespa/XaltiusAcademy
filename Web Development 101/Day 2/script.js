//Select the dom
const btn = document.getElementById("btn")

//Add Events
btn.addEventListener("click", createToDo)

//Create Functions
function createToDo() {
    //Select the dom
    let userInput = document.getElementById("userInput")
    let list = document.getElementById("unorder-list")

    //Create html element
    let li = document.createElement("li")
    let span = document.createElement("span")

    li.className = "task"
    span.className = "delete"

    //add content to element
    li.textContent = userInput.value
    span.textContent = "X"

    //append child
    li.appendChild(span)
    list.appendChild(li)
    
    span.addEventListener("click", deleteItem)

    function deleteItem() {
        list.removeChild(li)
    }
}
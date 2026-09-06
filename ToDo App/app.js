// Array to store all tasks
let todo = [];


// Get HTML elements
const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const emptyMessage = document.getElementById("emptyMessage");
const taskCount = document.getElementById("taskCount");


// Add a new task
function addTodo() {

    let newTodo = input.value.trim();

    // Don't allow empty tasks
    if (newTodo === "") {
        return;
    }

    // Add task to array
    todo.push(newTodo);

    // Clear input box
    input.value = "";

    // Update the webpage
    displayTodos();
}


// Display all tasks
function displayTodos() {

    // Clear the current list
    todoList.innerHTML = "";

    // Update task count
    taskCount.textContent =
        todo.length + (todo.length === 1 ? " task" : " tasks");


    // If there are no tasks
    if (todo.length === 0) {

        emptyMessage.style.display = "block";

        return;
    }


    // Hide empty message
    emptyMessage.style.display = "none";


    // Create an HTML element for every task
    for (let i = 0; i < todo.length; i++) {

        let li = document.createElement("li");

        li.classList.add("todo-item");


        li.innerHTML = `
            <span>${i + 1}. ${todo[i]}</span>

            <button
                class="delete-btn"
                onclick="deleteTodo(${i})"
            >
                Delete
            </button>
        `;


        // Add the task to the webpage
        todoList.appendChild(li);
    }
}


// Delete a task
function deleteTodo(index) {

    // Remove one task from the array
    todo.splice(index, 1);

    // Update the webpage
    displayTodos();
}


// Add task when button is clicked
addBtn.addEventListener("click", addTodo);


// Add task when Enter is pressed
input.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        addTodo();
    }

});


// Display the initial state
displayTodos();


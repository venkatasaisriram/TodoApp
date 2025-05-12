let taskTodo = [];

let inputVal = document.getElementById("inputVal");
let buttonClick = document.getElementById("buttonClick");
let taskList = document.getElementById("taskList");
let numbers = document.getElementById("numbers");

buttonClick.addEventListener('click', function takeValue(event) {
    event.preventDefault();
    let val = inputVal.value.trim();
    if (val !== "") {
        taskTodo.push(val);
        arrayPrint();
        inputVal.value = "";
        updateProgress();
    } else {
        alert("Please enter your task!!");
    }
});

function arrayPrint() {
    taskList.innerHTML = "";
    taskTodo.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-items");

        const checkIcon = document.createElement("input");
        checkIcon.type = "checkbox";
        checkIcon.classList.add("check-items");

        const textSpan = document.createElement("span");
        textSpan.textContent = item;
        // setItem();
        // getItem();

        const deleteIcon = document.createElement("button");
        deleteIcon.textContent = "delete";
        deleteIcon.classList.add("deleteIcon");

        checkIcon.addEventListener('change', () => {
            if (checkIcon.checked) {
                textSpan.classList.add("textStrike");
            }
            else {
                textSpan.classList.remove("textStrike");
            }
            updateProgress();
        })


        deleteIcon.addEventListener('click', () => {
            taskTodo.splice(index, 1);
            arrayPrint();
            updateProgress();
        });

        

        listItem.appendChild(checkIcon);  // checkbox first
        listItem.appendChild(textSpan);   // then text
        listItem.appendChild(deleteIcon); // then delete button

        taskList.appendChild(listItem);
    });

    updateProgress();

    function updateProgress() {
    const totalTasks = taskTodo.length;
    const completedTasks = document.querySelectorAll('.check-items:checked').length;

    const progressPercent = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

    // Update progress bar width
    document.getElementById("progress").style.width = `${progressPercent}%`;

    // Update stats number
    document.getElementById("numbers").textContent = `${completedTasks} / ${totalTasks}`;
}

// function setItem() {
//     localStorage.setItem("todo", JSON.stringify(taskTodo));
// }

// function getItem() {
//     const stored = localStorage.getItem("todo");
//     if (stored) {
//         taskTodo = JSON.parse(stored);
//         arrayPrint();
//     }
// }

}


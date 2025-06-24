window.onload = function () {
    const addButton = document.getElementById("addBtn");
    addButton.onclick = toDoList;
}

function toDoList() {
    const input = document.getElementById("input").value;
    if (input !== "") {
        const listTag = document.createElement("li");
        listTag.className = "list";
        const listItem = document.createElement("input");
        listItem.type = "checkbox";
        listItem.value = input;
        listTag.appendChild(listItem);
        const toDoitem = document.createTextNode("" + input);
        listTag.appendChild(toDoitem);
        const deleteBtn = document.createElement("img");
        deleteBtn.src = "src/delete.svg";
        deleteBtn.className = "deleteButton";
        deleteBtn.alt = "x";
        deleteBtn.title = "Delete";

        listTag.appendChild(deleteBtn);
        const listContainer = document.getElementById("listContainer");
        listContainer.append(listTag);
        document.getElementById("input").value = ''
        deleteItem();
    } else {
        alert("Please enter a task");
    }
}

function deleteItem() {
    const deleteButtons = document.getElementsByClassName("deleteButton");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function () {
            this.parentNode.remove();
        });
    }
}

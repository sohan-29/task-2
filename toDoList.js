window.onload = function () {
    const addButton = document.getElementById("addBtn");
    addButton.onclick = toDoList;
}

function toDoList() {
    const input = document.getElementById("input").value;
    const listTag = document.createElement("li");
    listTag.className = "list";
    const listItem = document.createElement("input");
    listItem.type = "checkbox";
    listItem.value = input;
    listTag.appendChild(listItem);
    const toDoitem = document.createTextNode("" + input);
    listTag.appendChild(toDoitem);
    const listContainer = document.getElementById("toDoListContainer");
    listContainer.append(listTag);
    document.getElementById("input").value = ''
}

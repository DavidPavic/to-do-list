const addBtn = document.getElementById("addBtn");
const bgChangeBtn = document.getElementById("bgChange");

const content = document.getElementById("tasks");

function Functionality() {
    let container = document.createElement("div");
    let checkbox = document.createElement("input");
    let text = document.createElement("input");
    let rmvBtn = document.createElement("button");

    checkbox.setAttribute("type", "checkbox");
    text.setAttribute("type", "text"); 
    text.setAttribute("placeholder", "Add task...");
    rmvBtn.innerHTML = "X";

    checkbox.classList.add("check");
    text.classList.add("txt");
    container.classList.add("task");
    rmvBtn.classList.add("rmvBtn");
    container.style.marginTop = "5%";

    container.appendChild(checkbox);
    container.appendChild(text);
    container.appendChild(rmvBtn);

    content.appendChild(container);

    rmvBtn.addEventListener('click', function() {
        rmvBtn.parentNode.style.display = "none";
    });
}

addBtn.addEventListener('click', Functionality);
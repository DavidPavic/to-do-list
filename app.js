const addBtn = document.getElementById("addBtn");
const bgBtn = document.getElementById("bgBtn");

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

    container.addEventListener("focusin", function() {
        container.style.backgroundColor = "orange";
        text.style.backgroundColor = "orange";
        text.style.borderBottomColor = "white";
    });
    container.addEventListener("focusout", function() {
        if(text.value && checkbox.checked) {
            container.style.backgroundColor = "MediumSeaGreen";
            text.style.backgroundColor = "MediumSeaGreen";
            rmvBtn.style.backgroundColor = "white";
            rmvBtn.style.color = "gray";
            rmvBtn.style.boxShadow = "0px 0px 10px gray";
            rmvBtn.style.border = "none";
            text.style.borderBottomColor = "white";
        }
        else if (!text.value && !checkbox.checked) {
            container.style.backgroundColor = "gray";
            text.style.backgroundColor = "gray";
            text.style.borderBottomColor = "white";
        }
        else if (!text.value || !checkbox.checked) {
            container.style.backgroundColor = "Tomato";
            text.style.backgroundColor = "Tomato";
            rmvBtn.style.backgroundColor = "white";
            rmvBtn.style.color = "gray";
            rmvBtn.style.boxShadow = "0px 0px 10px gray";
            rmvBtn.style.border = "none";
            text.style.borderBottomColor = "white";
        }   
    });
}

function DarkLightMode() {
    const body = document.body;

    body.classList.toggle("dark-mode");
}

addBtn.addEventListener('click', Functionality);
bgBtn.addEventListener('click', DarkLightMode);
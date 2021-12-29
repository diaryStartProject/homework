localStorage.setItem("0","할일1");
localStorage.setItem("1","할일2");
localStorage.setItem("2","할일3");


function render(){
    console.log(localStorage);
    let list = "";
    for (let i = 0; i < localStorage.length; i++) {
        list += "<li> <div class='todo-item'> <input type='checkbox'> <div class='text'>" + localStorage.getItem(localStorage.key(i)) + "</div></div> <div class='app-delete-todo-button' id=" + localStorage.key(i) + ">" + "-" + "</div></li>";
    }
    document.querySelector(".app-todo-list").innerHTML = list;

    let appDeleteButtons = document.querySelectorAll(".app-delete-todo-button");
    appDeleteButtons.forEach(appDeleteButton => {
    appDeleteButton.addEventListener("click", deleteItem);
    });
}

let appInputButton = document.querySelector(".app-input-button");
appInputButton.addEventListener("click", addItem);

function addItem(){
    let todoItem = document.querySelector(".app-input").value;
    if(todoItem != "" && todoItem != null){
        localStorage.setItem(localStorage.length++, todoItem);
        document.querySelector(".app-input").value = "";
        document.querySelector(".app-input").focus();
    }
    render();
}

async function deleteItem (){
    await localStorage.removeItem(this.getAttribute('id'));
    render();
}

render();
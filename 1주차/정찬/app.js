function render(){
    let list = "";

    Object.keys(localStorage).sort().forEach(key => {
       list += "<li> <div class='todo-item'> <input type='checkbox'> <div class='text'>" + localStorage.getItem(key) + "</div></div> <div class='app-delete-todo-button' id=" + key + ">" + "-" + "</div></li>";

    });
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

function deleteItem (){
    localStorage.removeItem(this.getAttribute('id'));
    render();
}

render();
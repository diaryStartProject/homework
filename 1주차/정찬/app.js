let todoList = [
    {id:0, text:"할일 1"},
    {id:1, text:"할일 2"},
    {id:2, text:"할일 3"},
];

function render(){
    let list = "";
    for (let i = 0; i < todoList.length; i++) {
        list += "<li> <div class='todo-item'> <input type='checkbox'> <div class='text'>" + todoList[i]['text'] + "</div></div> <div class='app-delete-todo-button' id=" + todoList[i].id + ">" + "-" + "</div></li>";
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
        todoList.push({id: todoList.length + 1, text:todoItem});
        document.querySelector(".app-input").value = "";
        document.querySelector(".app-input").focus();
    }
    render();
}

function deleteItem(){
    todoList = todoList.filter( el => el["id"] != this.getAttribute('id'));
    console.log(this.getAttribute('id'));
    render();
}

render();
import Header from './components/Header/header';
import main from './main.scss';
import TodoForm from './components/TodoForm/todoForm';
import TodoItem from './components/TodoItem/todoItem';

(() => {
	new Header(document.querySelector('.todo_main_header'));
	new TodoForm(document.querySelector('.todo_form_container'));
	new TodoItem(document.querySelector('.todo_main_list'));
})();
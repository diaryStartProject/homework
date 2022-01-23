import BasicComponent from '../../core/BasicComponent';
import todoform from './style.scss';
import todoItem from '../TodoItem/todoItem';

export default class TodoForm extends BasicComponent {
	constructor($target) {
		super($target);
		this.$inputElement = document.querySelector('.todo_input_text');
		this.$buttonElement = document.querySelector('.todo_container_button');
		this.setEvent();
	}

	template() {
		return `
			<div class="todo_container_input">
				<input type="text" class="todo_input_text" placeholder="할 일을 입력하세요">
			</div>
			<button type="button" class="todo_container_button" aria-label="추가 버튼"></button>
		`;
	}

	render() {
		this.$target.innerHTML = this.template();
	}

	addTodo() {
		localStorage.setItem(localStorage.length - 1, this.$inputElement.value);
		new todoItem(document.querySelector('.todo_main_list'));
		this.$inputElement.value = '';
		this.$inputElement.focus();
	}

	setEvent() {
		this.$inputElement.addEventListener('keypress', (e) => {
			if(e.key === 'Enter') {
				e.preventDefault();
				this.addTodo();
			}
		});

		this.$buttonElement.addEventListener('click', (e) => {
			this.addTodo();
		});
	}
}

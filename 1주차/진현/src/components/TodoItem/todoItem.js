import BasicComponent from '../../core/BasicComponent';
import todoItem from './style.scss';

export default class TodoItem extends BasicComponent {
  constructor($target) {
    super($target);
    this.$mainListElement = document.querySelector('.todo_main_list');
    this.modifyStatus = false;
    this.currentIndex = 0;
    this.setEvent();
  }

  template() {
    const itemList = Object.keys(localStorage).sort().filter(item => item !== 'loglevel:webpack-dev-server');
    return `
      ${itemList.map((key, index) =>
        `<div class="todo_main_item">
        ${this.modifyStatus && this.currentIndex === key ?
         `<input class="todo_main_modify type_active" data-index=${key} type="text" id="todoId_${key}" checked/>`:
          `<div class="todo_main_wrap">
            <input class="todo_main_input" data-index=${key} type="checkbox" id="todoId_${key}" checked/>
            <label class="todo_main_label"  data-index=${key} for="todoId_${key}">${localStorage.getItem(key)}</label>
           </div>`
        }
          <button type="button" class="todo_main_button" data-index=${key} aria-label="삭제 버튼"></button>
        </div>`).join('')}
      `;
  }

  render() {
    this.$target.innerHTML = this.template();
  }

  setState() {
    this.render();
  }

  setEvent() {
    this.$mainListElement.addEventListener('click', (e) => {
      if(e.target.classList.contains('todo_main_button')) {
        const index = e.target.dataset.index;
        localStorage.removeItem(index);
        this.setState();
      }
    });

    this.$mainListElement.addEventListener('dblclick', (e) => {
      if(e.target.classList.contains('todo_main_label')) {
        this.modifyStatus = !this.modifyStatus;
        this.currentIndex = e.target.dataset.index;
        this.render();
      }
    })

    this.$mainListElement.addEventListener('keypress', (e) => {
      if(e.target.classList.contains('todo_main_modify')) {
        if(e.key === 'Enter') {
          e.preventDefault();
          this.modifyStatus = !this.modifyStatus;
          const index = e.target.dataset.index;
          localStorage.setItem(index, e.target.value);
          this.setState();
        }
      }
    })
  }
}

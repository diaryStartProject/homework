import BasicComponent from '../../core/BasicComponent';
import header from './style.scss';

export default class Header extends BasicComponent {
	constructor($target) {
		super($target);
	}

	template() {
		return `
			<h1 class="todo_header_title">일정관리</h1>
		`;
	}

	render() {
		this.$target.innerHTML = this.template();
	}
}

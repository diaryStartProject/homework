export default class BasicComponent {
	constructor($target) {
		this.$target = $target;
		this.setup();
		this.render();
	}

	setup() {}

	template() {
		return '';
	}

	render() {
		this.$target.innerHTML = this.template();
	}

	setEvent() {}
	setState() {}
}
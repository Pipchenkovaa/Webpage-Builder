import { block } from "../scripts/utilus.js"
import { TextBlock, TitleBlock } from "../classes/block.js"

export class Sidebar {
	constructor(selector, updateFunction) {
		this.$el = document.querySelector(selector)
		this.update = updateFunction

		this.init()
	}
	
	init() {
		this.$el.insertAdjacentHTML('afterbegin', this.template)
		this.$el.addEventListener('submit', this.add.bind(this)) //необходимо "привязать" контекст через bind(this)
	}

	get template() {
		return [
			block('text'),
			block('article')
		].join('')
	}

	add(event) {
		event.preventDefault()

		const type = event.target.name
		const value = event.target.value.value
		const styles = event.target.styles.value

		const newBlock = type === 'text' ? new TextBlock(value, {styles}) : new TitleBlock(value, {styles})

		this.update(newBlock)

		event.target.value.value = ''
		event.target.styles.value = ''
	}
}
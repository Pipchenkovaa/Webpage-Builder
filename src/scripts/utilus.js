export function row(content, styles='') {
	return `
			<div class="row" style='${styles}'>
				${content}
			</div>
		`
}

export function col(content, styles = '') {
	return `
		<div class="columns-sm" style="${styles}">
			${content}
		</div>
	`
}

export function css(styles = {}) {
	if (typeof styles === 'string') {
		return styles
	}
	const toString = key => `${key}: ${styles[key]}`
	return Object.keys(styles).map(toString).join(';')
}

export function block(type) {
	return `
		<form name="${type}" class="block pl-4 pb-7">
			<h5 class="font-bold uppercase mb-1 text-stone-800">${type}</h5>
			<div>
				<input class="w-36 mb-1 pl-2 rounded-md bg-yellow-50 border border-stone-400 py-1" type="text" name="value" placeholder="Type something">
			</div>
			<div>
				<input class="w-36 mb-3 bg-yellow-50 border border-stone-400 rounded-md pl-2 py-1" type="text" name="styles" placeholder="Add some styles">
			</div>
			<button type="submit" class="font-semibold px-14 py-2 bg-blue border-2 border-darkBlue rounded-md text-light">ADD</button>
		</form>
	`
}
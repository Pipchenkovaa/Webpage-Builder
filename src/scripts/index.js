import { model } from "../scripts/model.js"
import { Site } from "../classes/site.js"
import { Sidebar } from "../classes/sidebar.js"

const site = new Site ('#site') // переменные с $ являются DOM-элементами
site.render(model)

const updateFunction = newBlock => {
	model.push(newBlock)
	site.render(model)
}

new Sidebar('#panel', updateFunction)